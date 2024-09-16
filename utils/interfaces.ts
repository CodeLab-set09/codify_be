import { Document } from "mongoose";

interface iUser {
  userName?: string;
  email?: string;
  password?: string;
  verifyToken?: string;
  verify?: boolean;
}

export interface iUserData extends iUser, Document {}

interface iBlog {
  title: string;
  video: string;
  desc: string;
  image: string;
  content: string;
}
export interface iBlogdata extends iBlog, Document {}

interface iData {
  instruction: string;
  result: string[];
  output: string;
  example: string;
  question: string;
  defaultcode: string;
  url: string;
  tag: string[];
  usecase: string[];
}
export interface iDataData extends iData, Document {}
