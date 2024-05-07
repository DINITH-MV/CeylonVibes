import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import catagoryRoutes from "./routes/storeRouter.js";
import React from "react";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

import { Catagory } from "./models/storeModel.js";

import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const mongoDBURL = mongoose.connection;
mongoose.connect(MONGODB_URL);

const app = express();
export const port = 5012;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public")); // will give the access the 'localhost:5010/catagories' folder

mongoDBURL.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
mongoDBURL.once("open", () => {
  console.log("Connected to MongoDB");
});

// // Routes
// app.get('/api/catagories', (req, res) => {
//   Catagory.find().then(item => {
//     console.log(item);
//     res.status(200).json({ message: 'Item fetched successfully', data: item, });
//   })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: 'Server error' });
//     });
// });

app.use("/", catagoryRoutes);
// Add routes for CRUD operations for users and products here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
