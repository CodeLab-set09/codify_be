import { model, models, Schema } from "mongoose";
import { iDataData } from "../utils/interfaces";

const questionModel = new Schema(
  {
    instruction: { type: String, required: true },
    result: { type: [], required: true },
    output: { type: String, required: true },
    example: { type: String, required: true },
    question: { type: String, required: true },
    defaultcode: { type: String, required: true },
    tag: { type: [], required: true },
    usecase: { type: [], required: true },
  },
  { timestamps: true }
);

const myQuestionModel =
  models.question || model<iDataData>("question", questionModel);

export default myQuestionModel;
