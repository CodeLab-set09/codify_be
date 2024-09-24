import { Request, Response } from "express";
import JsModel from "../model/jsmodel";

export const createJsQuestion = async (req: Request, res: Response) => {
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
    } = req.body;

    const getD = await JsModel.create({
      instruction,
      result: mainAnswer.split(","),
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    });
    return res.status(200).json({
      message: "Created Successfully",
      status: 200,
      data: getD,
    });
    console.log(instruction);
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      error: error.message,
    });
  }
};

export const getJSQuestions = async (req: Request, res: Response) => {
  try {
    const getD = await JsModel.find();
    return res.status(200).json({
      message: "All JS Questions",
      data: getD,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error Occured",
      error: error.message,
    });
  }
};
