import { Schema, model, Document } from "mongoose";

import { IUser } from "../types/User";

const UserSchema = new Schema<IUser>(
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
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", UserSchema);

export default User;