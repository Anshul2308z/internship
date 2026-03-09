import { Router } from "express";

import { createListing, getAllListings, getListings } from "../controllers/listingsController";
import isAdmin from "../middlewares/isAdmin";

const router = Router(); 

router.get("/all", getAllListings);
router.get("/filtered", getListings);
router.get("/:id", getListings);
router.post("/create", isAdmin, createListing);
export default router;
