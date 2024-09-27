import { Request, Response } from "express";
import modelCss from "../model/cssmodel";
export const createCss = async (req: Request, res: Response) => {
  try {
    const { instruction, example, question, result } = await req.body;
    const getCss = await modelCss.create({
      instruction,
      result,
      example,
      question,
    });
    return res.status(201).json({
      message: "css questions created",
      data: getCss,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "CSS not created",
      error: error.message,
    });
  }
};

export const getallCssQuestions = async (req: Request, res: Response) => {
  try {
    const getD = await modelCss.find();
    return res
      .status(201)
      .json({ message: "all css questions gotten", data: getD });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
