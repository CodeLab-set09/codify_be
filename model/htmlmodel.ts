import { model, models, Schema } from "mongoose";
import { iDataData } from "../utils/interfaces";

const htmlModel = new Schema(
  {
    instruction: { type: String, required: true },
    answer: { type: String, required: true },
    question: { type: String, required: true },
    tag: { type: [], required: true },
  },
  { timestamps: true }
);

const myHtmlModel = models.html || model<iDataData>("html", htmlModel);

export default myHtmlModel;
