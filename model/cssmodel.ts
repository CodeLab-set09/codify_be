import { model, models, Schema } from "mongoose";
import { iDataData } from "../utils/interfaces";

const modelCss = new Schema(
  {
    instruction: {
      type: String,
    },
    question: {
      type: String,
    },
    example: {
      type: String,
    },
    result: {
      type: [],
    },
  },
  { timestamps: true }
);
export default model<iDataData>("cssQuests", modelCss);
