import User from "../models/User";

import { Request, Response } from "express";

// @desc    Sync User After Google Login
// @route   POST /api/auth/sync
// @access  Public

export const SyncUser = async (req: Request, res: Response) => {
  try {
    const { name, email, image } = req.body;
    // Anyone could fake email in Postman. In production, verify the token from Google and extract email from it.

    let user = await User.findOne({ email });   
    if (!user) {
      user = new User({ name, email, image });
      await user.save();
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error syncing user:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

