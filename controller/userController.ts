import { Request, Response } from "express";

import bcrypt from "bcrypt";
import { sendEmail } from "../utils/email";
import crypto from "crypto";
import authUserModel from "../model/myUserModel";
import { forgetPassEmail } from "../utils/emails/fogerPassEmail";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, userName } = req.body;
    const salt = await bcrypt.genSalt(10);

    const token = crypto.randomBytes(3).toString("hex");

    const hashed = await bcrypt.hash(password, salt);

    const user = await authUserModel.create({
      email,
      userName,
      password: hashed,
      verifyToken: token,
    });

    sendEmail(user);

    return res
      .status(201)
      .json({ message: "created successfully", data: user });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const verifyUserAccount = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { token } = req.body;

    const accountUser = await authUserModel.findById(userID);

    if (accountUser?.verifyToken === token) {
      const user = await authUserModel.findByIdAndUpdate(
        userID,
        {
          verifyToken: "",
          verify: true,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "user account verified successfully", data: user });
    } else {
      return res.status(404).json({ message: "Invalid token" });
    }
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const forgetUserPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const token = crypto.randomBytes(3).toString("hex");

    const getUser = await authUserModel.findOne({ email });

    if (getUser && getUser?.verify) {
      const user = await authUserModel.findByIdAndUpdate(
        getUser?._id,
        {
          verifyToken: token,
        },
        { new: true }
      );

      sendEmail(getUser);

      return res
        .status(201)
        .json({ message: "created successfully", data: user });
    } else {
      return res.status(404).json({ message: "user can't be found" });
    }
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await authUserModel.findOne({ email });
    if (findUser) {
      forgetPassEmail(findUser);
      res.status(200).json({ message: "User found", data: findUser });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      error: error.message,
    });
  }
};

export const resetUserPassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const { userID } = req.params;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const getUser = await authUserModel.findById(userID);

    if (getUser && getUser?.verify && getUser?.verifyToken !== "") {
      const user = await authUserModel.findByIdAndUpdate(
        getUser?._id,
        {
          verifyToken: "",
          password: hashed,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "created successfully", data: user });
    } else {
      return res.status(404).json({ message: "user can't be found" });
    }
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { userName, password } = req.body;

    const getUser = await authUserModel.findById(userID);
    if (getUser) {
      const user = await authUserModel.findByIdAndUpdate(getUser, {
        userName,
        password,
      });

      return res
        .status(201)
        .json({ message: "User update successfully", data: user });
    } else {
      return res
        .status(400) // Changed to 400 for a more appropriate error status
        .json({ message: "deos not exist" });
    }
  } catch (error: any) {
    return res
      .status(400) // Changed to 400 for a more appropriate error status
      .json({ message: "User not update", error: error.message });
  }
};
