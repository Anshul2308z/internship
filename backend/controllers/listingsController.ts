import Listing from "../models/Listing";

import { Request, Response } from "express"; 
import { IListing } from "../types/Listing";
import mongoose from "mongoose";

//Contains getAllListings, getListingById, getListings (with pagination and filtering by type) 

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

export const getListings = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const type = req.query.type as string | undefined;

    const skip = (page - 1) * limit;

    const filter: any = {};
    if (type) {
      filter.type = type;
    }

    const total = await Listing.countDocuments(filter);

    const listings = await Listing.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      listings,
    });
  } catch (error) { 
    console.error("Error fetching listings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export async function createListing(req: Request, res: Response) {

  const list: IListing =  req.body; 
  try { 
    const newListing = await Listing.create(list);
    res.status(201).json({ success: true, listing: newListing });
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}


export const getListingById = async (req: Request, res: Response) => {

  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid listing id" });
    }
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    const obj = listing.toObject();

    res.json({
      ...obj,
      id: obj._id.toString(),
      _id: undefined
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};