import mongoose from "mongoose";

const Schema = mongoose.Schema;


const catagorySchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
);

export const Catagory = mongoose.model("catagory", catagorySchema);

const NutsSchema = new Schema({  
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  discPrice: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const Nuts = mongoose.model("Nuts&Seeds", NutsSchema);

const SnacksSchema = new Schema({
  
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  discPrice: {
    type: String,
  },
  image: {
    type: String,
  },
  imageFolder: {
    type: String,
  },
});

export const Snacks = mongoose.model("Snacks", SnacksSchema);

const SweetnersSchema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  discPrice: {
    type: String,
  },
  image: {
    type: String,
  },
  imageFolder: {
    type: String,
  },
});

export const Sweetners = mongoose.model("Sweetners", SweetnersSchema);

const OffersSchema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  discPrice: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const Offers = mongoose.model("offers", OffersSchema);
