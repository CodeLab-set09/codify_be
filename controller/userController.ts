import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/email";
import crypto from "crypto";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);

    const token = crypto.randomBytes(3).toString("hex");

    const hashed = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      email,
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

    const accountUser = await userModel.findById(userID);

    if (accountUser?.verifyToken === token) {
      const user = await userModel.findByIdAndUpdate(
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

    const getUser = await userModel.findOne({ email });

    if (getUser && getUser?.verify) {
      const user = await userModel.findByIdAndUpdate(
        getUser?._id,
        {
          verifyToken: token,
        },
        { new: true }
      );

      // sendEmail(user);

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

export const resetUserPassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const { userID } = req.params;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const getUser = await userModel.findById(userID);

    if (getUser && getUser?.verify && getUser?.verifyToken !== "") {
      const user = await userModel.findByIdAndUpdate(
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
