import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import catagoryRoutes from "./routes/storeRouter.js";
import React from "react";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { Catagory, Nuts } from "./models/storeModel.js";

import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const mongoDBURL = mongoose.connection;
mongoose.connect(MONGODB_URL);

const app = express();
export const port = 5010;

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
      
      // For image upload
      const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "public/catagories");
        },
        filename: (req, file, cb) => {
          cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
            );
          },
        });
        
        const upload = multer({
          storage: storage,
        });
        app.post("/catagories", upload.single("file"), (req, res) => {
  Catagory.create({ name: req.body.name, image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => res.log(err));
});

app.put("/catagories/:id", upload.single("file"), (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Catagory.findByIdAndUpdate(
    id,
    { name: req.body.name, image: req.file.filename },
    { new: true } // This option returns the updated document
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err)); // Use console.log to log errors
});

app.delete("/catagories/:id", (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Catagory.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({ message: "Category deleted successfully" });
      } else {
        res.json({ message: "No category found with the provided ID" });
      }
    })
    .catch((err) => console.log(err)); // Use console.log to log errors
});

// For Nuts
const storageForNuts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/nuts&seeds");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadNuts = multer({
  storage: storageForNuts,
});

app.post("/Nuts&Seeds", uploadNuts.single("file"), (req, res) => {
  console.log(req.body.name);
  Nuts.create({
    name: req.body.name,
    price: req.body.price,
    discPrice: req.body.discPrice,
    image: req.file.filename,
  })
  .then((result) => res.json(result))
  .catch((err) => res.log(err));
});

app.put("/Nuts&Seeds/:id", upload.single("file"), (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Nuts.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      price: req.body.price,
      discPrice: req.body.discPrice,
      image: req.file.filename,
    },
    { new: true } // This option returns the updated document
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err)); // Use console.log to log errors
});

app.delete("/Nuts&Seeds/:id", (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Nuts.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({ message: "Category deleted successfully" });
      } else {
        res.json({ message: "No category found with the provided ID" });
      }
    })
    .catch((err) => console.log(err)); // Use console.log to log errors
});

app.get("/getImage", (req, res) => {
  Catagory.find()
    .then((Catagory) => res.json(Catagory))
    .catch((err) => res.json(err));
});
app.get("/getImage", (req, res) => {
  Nuts.find()
    .then((Nuts) => res.json(Nuts))
    .catch((err) => res.json(err));
});
app.get("/getImage", (req, res) => {
  Offers.find()
    .then((Offers) => res.json(Offers))
    .catch((err) => res.json(err));
});
