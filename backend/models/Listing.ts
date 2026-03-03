import { Schema, model, Document, Types } from "mongoose";

//interface for listing document- Intern or Job 
export interface IListing extends Document {
  heading: string;
  company: string;
  summary: string;
  workFromHome: boolean;
  compensation: number;
  type: "intern" | "job";
  tags: string[];
  postInternPromise?: string;
  createdBy: Types.ObjectId;

  details?: {
    startDate?: string;
    ctcRange?: {
      min: number;
      max: number;
    };
    experienceRequired?: number;
    applyBy?: Date;
    jobType?: string;
    applicantsCount?: number;
    openings?: number;

    responsibilities?: string[];
    benefits?: string[];
    skillsRequired?: string[];

    companyInfo?: {
      website?: string;
      description?: string;
      hiringSince?: string;
      opportunitiesPosted?: number;
      candidatesHired?: number;
    };
  };

  createdAt: Date;
}

//Schema implementation
const listingSchema = new Schema<IListing>(
  {
    heading: { type: String, required: true },
    company: { type: String, required: true },
    summary: { type: String, required: true },
    workFromHome: { type: Boolean, default: false },
    compensation: { type: Number, required: true },
    type: { type: String, enum: ["intern", "job"], required: true },
    tags: { type: [String], default: [] },
    postInternPromise: { type: String },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    details: {
      startDate: { type: String },
      ctcRange: {
        min: { type: Number },
        max: { type: Number },
      },
      experienceRequired: { type: Number },
      applyBy: { type: Date },
      jobType: { type: String },
      applicantsCount: { type: Number, default: 0 },
      openings: { type: Number },

      responsibilities: { type: [String], default: [] },
      benefits: { type: [String], default: [] },
      skillsRequired: { type: [String], default: [] },

      companyInfo: {
        website: { type: String },
        description: { type: String },
        hiringSince: { type: String },
        opportunitiesPosted: { type: Number },
        candidatesHired: { type: Number },
      },
    },
  },
  { timestamps: true }
);

export default model<IListing>("Listing", listingSchema);