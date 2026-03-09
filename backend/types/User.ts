import { Schema, model, Document } from "mongoose";
import { User } from "@anshul/shared-types";

export interface IUser extends Document, Omit<User, "id"> {}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },

    preferences: {
      preferredRoles: { type: [String], default: [] },
      preferredLocation: { type: String },
      workType: {
        type: String,
        enum: ["remote", "hybrid", "onsite"],
      },
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);