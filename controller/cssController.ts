import { Request, Response } from "express";
import mycssModel from "../model/cssmodel";

export const createCss = async (req: Request, res: Response) => {
  try {
    const {
      instruction,
      output,
      example,
      question,
      defaultcode,
      tag,
      usecase,
      result,
    } = await req.body;
    const getCss = await mycssModel.create({
      instruction,
      result,
      output,
      example,
      question,
      defaultcode,
      tag,
      usecase,
    });
    return res.status(201).json({
      message: "user created",
      data: getCss,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "CSS not created",
      error: error.message,
    });
  }
};
