"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listingsController_1 = require("../controllers/listingsController");
const router = (0, express_1.Router)();
router.get("/listings", listingsController_1.getListings);
exports.default = router;
