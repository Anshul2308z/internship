import Listing from "../models/Listing";

import { Request, Response } from "express"; 

//Contains getAllListings, getListingById 

// @desc    Get all listings
// @route   GET /api/listings
// @access  Public

export const getAllListings = async (req: Request, res: Response) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, listings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get listing by ID
// @route   GET /api/listings/:id
// @access  Public

export const getListingById = async (req: Request, res: Response) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ success: false, message: "Listing not found" });
    }
    res.status(200).json({ success: true, listing });
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};



