"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isAdmin;
const User_1 = __importDefault(require("../models/User"));
async function isAdmin(req, res, next) {
    const body = req.body;
    const user = await User_1.default.findOne({
        email: body.email,
    });
    if (user && user.role === "admin") {
        next();
    }
    else {
        return res.status(403).json({
            message: "Admin access denied",
        });
    }
}
