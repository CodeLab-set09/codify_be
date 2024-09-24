import { model, models, Schema } from "mongoose";
import { iDataData } from "../utils/interfaces";

const cssModel = new Schema(
  {
    instruction: { type: String, required: true },
    result: { type: [], required: true },
    example: { type: String, required: true },
    question: { type: String, required: true },
  },
  { timestamps: true }
);

const mycssModel = models.csss || model<iDataData>("csss", cssModel);

export default mycssModel;
