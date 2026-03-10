"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listingsController_1 = require("../controllers/listingsController");
const isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
const router = (0, express_1.Router)();
router.get("/all", listingsController_1.getAllListings);
router.get("/filtered", listingsController_1.getListings);
router.get("/:id", listingsController_1.getListings);
router.post("/create", isAdmin_1.default, listingsController_1.createListing);
exports.default = router;
