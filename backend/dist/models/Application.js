"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const applicationSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    listing: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    status: {
        type: String,
        enum: ["applied", "shortlisted", "rejected"],
        default: "applied",
    },
}, {
    timestamps: true,
});
/**
 * Prevent duplicate applications
 */
applicationSchema.index({ user: 1, listing: 1 }, { unique: true });
exports.default = (0, mongoose_1.model)("Application", applicationSchema);
