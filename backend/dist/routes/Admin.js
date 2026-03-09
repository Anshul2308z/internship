"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = __importDefault(require("../models/Users"));
const router = (0, express_1.Router)();
router.get("/check", async (req, res) => {
    const body = req.body;
    const user = await Users_1.default.findOne({
        email: body.email,
    });
    if (user) {
        return res.status(200).json({
            message: "Admin access granted",
            user: user,
        });
    }
    else {
        return res.status(403).json({
            message: "Admin access denied",
        });
    }
});
exports.default = router;
