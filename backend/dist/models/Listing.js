"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//interface for listing document- Intern or Job 
//Schema implementation
const listingSchema = new mongoose_1.Schema({
    heading: { type: String, required: true },
    company: { type: String, required: true },
    summary: { type: String, required: true },
    workFromHome: { type: Boolean, default: false },
    compensation: { type: Number, required: true },
    type: { type: String, enum: ["intern", "job"], required: true },
    tags: { type: [String], default: [] },
    postInternPromise: { type: String },
    category: { type: String, required: true },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
listingSchema.index({ createdAt: -1 });
exports.default = (0, mongoose_1.model)("Listing", listingSchema);
