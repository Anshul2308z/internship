"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
