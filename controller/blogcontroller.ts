import { Request, Response } from "express";
// import userMOdel from "../model/userMOdel";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/email";
import crypto from "crypto";
// import blogdata from "../model/blogmodel";
import myBlogModel from "../model/blogmodel";

export const createblog = async (req: Request, res: Response) => {
  try {
    const { title, video, content, desc, image } = req.body;

<<<<<<< HEAD
    const blog = await blogdata.create({ title, video, content, desc, image });
=======
    const blog = await myBlogModel.create({
      title,
      video,
      content,
      desc,
      image,
    });
>>>>>>> 89420707abb864449b1cc65267cad73e05313498
    return res
      .status(201)
      .json({ message: "created successfully", data: blog });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const readAllblog = async (req: Request, res: Response) => {
  try {
    const blog = myBlogModel.find();
    return res.status(201).json({ message: "all blog gotten", data: blog });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
