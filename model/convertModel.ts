import { model, Schema, Document } from "mongoose";

interface iProps {
  studentName: string;
  studentLocation: string;
  studentClass: string;
}

interface iPropsData extends iProps, Document {}

const convertModel = new Schema<iPropsData>(
  {
    studentName: {
      type: String,
    },
    studentLocation: {
      type: String,
    },
    studentClass: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("converts", convertModel);
