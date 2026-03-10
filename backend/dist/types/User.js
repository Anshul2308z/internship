"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userSchema);
