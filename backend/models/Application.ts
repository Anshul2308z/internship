import { Schema, model, Document, Types } from "mongoose";
import { IApplication } from "../types/Application";

const applicationSchema = new Schema<IApplication>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    status: {
      type: String,
      enum: ["applied", "shortlisted", "rejected"],
      default: "applied",
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Prevent duplicate applications
 */
applicationSchema.index({ user: 1, listing: 1 }, { unique: true });

export default model<IApplication>("Application", applicationSchema);