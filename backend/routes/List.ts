import { Router } from "express";

import { createListing, getAllListings, getListings } from "../controllers/listingsController";
import isAdmin from "../middlewares/IsAdmin";

const router = Router(); 

router.get("/all", getAllListings);
router.get("/filtered", getListings);
router.post("/create", isAdmin, createListing);
export default router;
