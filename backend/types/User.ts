import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  role: "student" | "admin";

  preferences?: {
    preferredRoles?: string[];
    preferredLocation?: string;
    workType?: "remote" | "hybrid" | "onsite";
  };

  createdAt: Date;
  updatedAt: Date;
}