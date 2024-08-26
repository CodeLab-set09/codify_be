import { Document } from "mongoose";

interface iUser {
  userName?: string;
  email?: string;
  password?: string;

  verifyToken?: string;
  verify?: boolean;
}

export interface iUserData extends iUser, Document {}
