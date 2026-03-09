// import { Schema, model, Document, Types } from "mongoose";
// export interface IListing extends Document 


import { Listing } from "@anshul/shared-types";
import { Document, Types } from "mongoose";

export interface IListing extends Document, Omit<Listing, "id" | "createdBy"> {
  createdBy: Types.ObjectId;
}