"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListings = exports.getListingById = exports.getAllListings = void 0;
const Listing_1 = __importDefault(require("../models/Listing"));
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
const getListingById = async (req, res) => {
    try {
        const listing = await Listing_1.default.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ success: false, message: "Listing not found" });
        }
        res.status(200).json({ success: true, listing });
    }
    catch (error) {
        console.error("Error fetching listing:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
exports.getListingById = getListingById;
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
