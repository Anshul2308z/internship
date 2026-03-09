import { Router } from "express";
import { SyncUser } from "../controllers/authController";

const router = Router();

router.post("/sync", SyncUser);

export default router;  
