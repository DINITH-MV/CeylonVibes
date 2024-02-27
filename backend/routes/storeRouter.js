import express from "express";
import { Catagory, Offers, Products } from "../models/storeModel.js";
import { Nuts, Snacks, Sweetners } from "../models/storeModel.js";
import multer from "multer";

const router = express();

// Routes for Catagories
// for Read
router.get("/api/catagories", (req, res) => {
  Catagory.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// For Read part odf Update
router.get("/api/catagories/:id", (req, res) => {
  const { id } = req.params;
  Catagory.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Nuts & Seeds
router.get("/api/Nuts&Seeds", (req, res) => {
  const { type } = "nuts&seeds";
  Products.find({ type: type })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.get("/api/Nuts&Seeds/:id", (req, res) => {
  const { id } = req.params;
  Nuts.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Snacks
router.get("/api/Snacks", (req, res) => {
  Snacks.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Sweetners
router.get("/api/Sweetners", (req, res) => {
  Sweetners.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});
router.post("/api/Sweetners", (req, res) => {
  const newSweetners = new newSweetners(req.body);
  console.log(newSweetners);
  newSweetners
    .save()
    .then((item) => {
      console.log(item);
      res.status(201).json({ message: "Item added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Offers
router.get("/api/offers", (req, res) => {
  Offers.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// from index.js
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
router.post("/catagories", upload.single("file"), (req, res) => {
  Catagory.create({ name: req.body.name, image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => res.log(err));
});

router.put("/catagories/:id", upload.single("file"), (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Catagory.findByIdAndUpdate(
    id,
    { name: req.body.name, image: req.file.filename },
    { new: true } // This option returns the updated document
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err)); // Use console.log to log errors
});

router.delete("/catagories/:id", (req, res) => {
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

router.post("/Nuts&Seeds", uploadNuts.single("file"), (req, res) => {
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

router.put("/Nuts&Seeds/:id", uploadNuts.single("file"), (req, res) => {
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

router.delete("/Nuts&Seeds/:id", (req, res) => {
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

export default router;
