import express from 'express';
import cors from 'cors';

import connectDB from './config/db';

import authRoutes from './routes/Auth';
import listingRoutes from './routes/List';

import transformMongoDoc  from './middlewares/transformMongo';

import User from './models/User';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(transformMongoDoc);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/fetch", listingRoutes);

app.get("/", (req,res)=>{
    res.send("Hello World");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  