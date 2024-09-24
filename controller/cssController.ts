import { Request, Response } from "express";
import mycssModel from "../model/cssModel";

export const createCss = async (req: Request, res: Response) => {
  try {
    const { instruction, example, question, result } = await req.body;
    const getCss = await mycssModel.create({
      instruction,
      result,
      example,
      question,
    });
    return res.status(201).json({
      message: "css created",
      data: getCss,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "CSS not created",
      error: error.message,
    });
  }
};
