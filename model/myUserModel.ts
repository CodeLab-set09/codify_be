import { Schema, model } from "mongoose";
import { iUserData } from "../utils/interfaces";

const authUserModel = new Schema<iUserData>(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    verifyToken: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("authUsers", authUserModel);
