import { Request, Response } from "express";
import myTypescriptModel from "../model/typescriptmodel";

export const createtypescriptquestion = async (req: Request, res: Response) => {
  try {
    const {
      instruction,
      mainAnswer,
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
      result,
    } = await req.body;
    const getD = await myTypescriptModel.create({
      instruction,
      result,
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    });
    return res
      .status(201)
      .json({ message: "created successfully", data: getD });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const readalltypescriptqueations = async (
  req: Request,
  res: Response
) => {
  try {
    const getD = await myTypescriptModel.find();
    return res
      .status(201)
      .json({ message: "created successfully", data: getD });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
