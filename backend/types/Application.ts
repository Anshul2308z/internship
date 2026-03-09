import { Schema, model, Document, Types } from "mongoose";

export interface IApplication extends Document {
  user: Types.ObjectId;
  listing: Types.ObjectId;
  status: "applied" | "shortlisted" | "rejected";
  createdAt: Date;
}