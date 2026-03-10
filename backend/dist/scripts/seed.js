"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Listing_1 = __importDefault(require("../models/Listing"));
const db_1 = __importDefault(require("../config/db"));
async function seed() {
    await (0, db_1.default)();
    console.log("Clearing old data...");
    await User_1.default.deleteMany({ role: "student" });
    await Listing_1.default.deleteMany({});
    console.log("Creating users...");
    const users = await User_1.default.insertMany(Array.from({ length: 10 }).map((_, i) => ({
        name: `Student ${i + 1}`,
        email: `student${i + 1}@example.com`,
        role: "student",
        preferences: {
            preferredRoles: ["frontend", "backend", "fullstack"],
            preferredLocation: "remote",
            workType: "remote",
        },
    })));
    console.log("Creating listings...");
    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "Razorpay",
        "Swiggy",
        "Zomato",
        "Flipkart",
        "Paytm",
        "PhonePe",
        "Meesho",
    ];
    const listings = [];
    for (let i = 0; i < 20; i++) {
        const isIntern = i < 10;
        const randomUser = users[Math.floor(Math.random() * users.length)];
        listings.push({
            heading: isIntern
                ? `Software Intern ${i + 1}`
                : `Software Engineer ${i + 1}`,
            company: companies[i % companies.length],
            summary: "Work on real-world production systems.",
            workFromHome: Math.random() > 0.5,
            compensation: isIntern ? 15000 + i * 1000 : 600000 + i * 50000,
            category: "engineering",
            type: isIntern ? "intern" : "job",
            tags: ["react", "node", "mongodb"],
            createdBy: randomUser._id,
            index: i,
            details: {
                startDate: "Immediately",
                ctcRange: {
                    min: isIntern ? 15000 : 600000,
                    max: isIntern ? 30000 : 1200000,
                },
                experienceRequired: isIntern ? 0 : 2,
                applyBy: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                jobType: "full-time",
                applicantsCount: 0,
                openings: 3,
                responsibilities: [
                    "Build scalable APIs",
                    "Work with product teams",
                    "Write clean code",
                ],
                benefits: ["Health Insurance", "Flexible hours"],
                skillsRequired: ["JavaScript", "React", "Node.js"],
                companyInfo: {
                    website: "https://example.com",
                    description: "A fast growing tech company",
                    hiringSince: "2015",
                    opportunitiesPosted: 25,
                    candidatesHired: 10,
                },
            },
        });
    }
    await Listing_1.default.insertMany(listings);
    console.log("Seed complete ✔");
    process.exit();
}
seed();
