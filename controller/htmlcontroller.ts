import { Request, Response } from "express";
import myHtmlModel from "../model/htmlmodel";

export const createhtmlquestion = async (req: Request, res: Response) => {
  try {
    const { instruction, answer, question, tag } = await req.body;
    const getD = await myHtmlModel.create({
      instruction,
      answer,
      question,
      tag,
    });
    return res
      .status(201)
      .json({ message: "created successfully", data: getD });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const readallhtmlqueations = async (req: Request, res: Response) => {
  try {
    const getD = await myHtmlModel.find();
    return res
      .status(201)
      .json({ message: "created successfully", data: getD });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
