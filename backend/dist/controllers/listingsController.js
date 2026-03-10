"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingById = exports.getListings = exports.getAllListings = void 0;
exports.createListing = createListing;
const Listing_1 = __importDefault(require("../models/Listing"));
const mongoose_1 = __importDefault(require("mongoose"));
//Contains getAllListings, getListingById, getListings (with pagination and filtering by type) 
// @desc    Get all listings
// @route   GET /api/listings
// @access  Public
const getAllListings = async (req, res) => {
    try {
        const listings = await Listing_1.default.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, listings });
    }
    catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
exports.getAllListings = getAllListings;
// @desc    Get listing by ID
// @route   GET /api/listings/:id
// @access  Public
const getListings = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const type = req.query.type;
        const skip = (page - 1) * limit;
        const filter = {};
        if (type) {
            filter.type = type;
        }
        const total = await Listing_1.default.countDocuments(filter);
        const listings = await Listing_1.default.find(filter)
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
    }
    catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
exports.getListings = getListings;
async function createListing(req, res) {
    const list = req.body;
    try {
        const newListing = await Listing_1.default.create(list);
        res.status(201).json({ success: true, listing: newListing });
    }
    catch (error) {
        console.error("Error creating listing:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
const getListingById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid listing id" });
        }
        const listing = await Listing_1.default.findById(id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        const obj = listing.toObject();
        res.json({
            ...obj,
            id: obj._id.toString(),
            _id: undefined
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
exports.getListingById = getListingById;
