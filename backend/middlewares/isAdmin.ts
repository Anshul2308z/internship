import User from "../models/User";
import { Request, Response, NextFunction } from "express";


export default async function isAdmin(req: Request, res: Response, next: NextFunction) {
  const body = req.body;
  const user = await User.findOne({
    email: body.email,
  });
  if( user && user.role === "admin"){
    next();
  }
  else{
    return res.status(403).json({
        message: "Admin access denied",
    });
  }

}       