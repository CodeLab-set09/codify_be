import { Request, Response } from "express";
import myCssModel from "../model/cssmodel";

export const createcssquestion = async (req: Request, res: Response) => {
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
    const getD = await myCssModel.create({
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

export const readallcssqueations = async (req: Request, res: Response) => {
  try {
    const getD = await myCssModel.find();
    return res
      .status(201)
      .json({ message: "created successfully", data: getD });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
