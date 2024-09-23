import { model, models, Schema } from "mongoose";
import { iDataData } from "../utils/interfaces";

const cssModel = new Schema(
  {
    instruction: { type: String },
    result: { type: [] },
    output: { type: String },
    example: { type: String },
    question: { type: String },
    defaultcode: { type: String },
    tag: { type: [] },
    usecase: { type: [] },
  },
  { timestamps: true }
);

const myCssModel =
  models.cssquestions || model<iDataData>("cssquestions", cssModel);

export default myCssModel;
