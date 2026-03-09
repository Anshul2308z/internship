"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncUser = void 0;
const Users_1 = __importDefault(require("../models/Users"));
// @desc    Sync User After Google Login
// @route   POST /api/auth/sync
// @access  Public
const SyncUser = async (req, res) => {
    try {
        const { name, email, image } = req.body;
        // Anyone could fake email in Postman. In production, verify the token from Google and extract email from it.
        let user = await Users_1.default.findOne({ email });
        if (!user) {
            user = new Users_1.default({ name, email, image });
            await user.save();
        }
        res.status(200).json({ success: true, user });
    }
    catch (error) {
        console.error("Error syncing user:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
exports.SyncUser = SyncUser;
