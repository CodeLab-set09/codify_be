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
const myModelCss = models.cssQuests || model<iDataData>("cssQuests", modelCss);
export default myModelCss;
