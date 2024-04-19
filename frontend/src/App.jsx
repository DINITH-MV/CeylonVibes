import React, { useEffect, useState } from "react";
import Shop from "./pages/Shop.jsx";
import FoodCatagory from "./components/Organic Items/Content/FoodCatagory.jsx";
import { Navigate, Route, Router, Routes } from "react-router";
import ShopInside from "./pages/ShopInside.jsx";
import Header from "./components/Header/Header.jsx";
import Reports from "./pages/Reports.jsx";
import axios from "axios";
import Image from "./components/Organic Items/Content/image.jsx";
import "./App.css"
import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile, ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./components/Header/sign-in.jsx";
import UserProfilePage from "./components/Header/user-profile.jsx";
import UpdateCatagory from "./pages/Admin Dashboard 2/Organic Items/UpdateCatagory.jsx";
import AddCatagory from "./pages/Admin Dashboard 2/Organic Items/AddCatagory.jsx";
import ItemsCatagory from "./pages/Admin Dashboard 2/Organic Items/ItemsCatagory.jsx";
import AddItemsCatagory from "./pages/Admin Dashboard 2/Organic Items/AddItemsCatagory.jsx";
import UpdateItemsCatagory from "./pages/Admin Dashboard 2/Organic Items/UpdateItemsCatagory.jsx";
import Admin from "./pages/Admin Dashboard 2/Admin.jsx";
import Products from "./components/products/Products.jsx";
import Search from "./pages/Admin Dashboard 2/Organic Items/Search.jsx";
import AddProduct from "./pages/Admin Dashboard 2/Organic Items/AddProduct.jsx";
import ListProducts from "./pages/Admin Dashboard 2/Organic Items/OrganicItems.jsx";
import OrganicItems from "./pages/Admin Dashboard 2/Organic Items/OrganicItems.jsx";

const App = () => {
  console.disableYellowBox = true;

  const [nuts, setNuts] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [sweetners, setSweetners] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [offers, setOffers] = useState([]);
  const [cart, setCart] = useState([]);

  axios.defaults.baseURL = `http://localhost:5012`;

  const fetchNuts = async () => {
    try {
      const response = await axios.get("/api/Nuts&Seeds");
      setNuts(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const fetchSnacks = async () => {
    try {
      const response = await axios.get("/api/Snacks");
      setSnacks(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching snacks:", error);
    }
  };
  const fetchSweetners = async () => {
    try {
      const response = await axios.get("/api/Sweetners");
      setSweetners(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching sweetners:", error);
    }
  };



  const fetchCatagories = async () => {
    try {
      const response = await axios.get("/api/catagories");
      setCatagories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchItemsCatagory = async () => {
    try {
      const response = await axios.get("/api/catagories");
      setCatagories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOffers = async () => {
    try {
      const response = await axios.get("/api/offers");
      setOffers(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get("/api/lists");
      setCart(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  console.log(cart)

  // for admin panel

  return (
    <Routes>
      <Route path="/" element={<Shop catagories={catagories} fetchCatagories={fetchCatagories} offers={offers} fetchOffers={fetchOffers} />} />
      <Route path="/reports" element={<Reports />} />
      <Route
        path="/shopInside/:id"
        element={<ShopInside nuts={nuts} fetchNuts={fetchNuts} snacks={snacks} fetchSnacks={fetchSnacks} sweetners={sweetners} fetchSweetners={fetchSweetners} fetchCartItems={fetchCart} cartItems={cart} />}
      />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignedOut />} />
      <Route path="/profile" element={<UserProfilePage />} />

      for admin panel

      <Route path="admin" element={<Admin />} >
        <Route path="search" element={<Search />} />
        <Route path="OrganicItems" element={<OrganicItems />} />
        <Route path="AddCatagory" element={<AddCatagory fetchCatagories={fetchCatagories} />} />
        <Route path="ItemsCatagory/:id" element={<ItemsCatagory />} />
        <Route path="AddItemsCatagory/:id" element={<AddItemsCatagory fetchItemsCatagory={fetchItemsCatagory} />} />
        <Route path="updateCatagory/:id" element={<UpdateCatagory />} />
        <Route path="updateItemsCatagory/:id" element={<UpdateItemsCatagory />} />
      </Route>

      <Route path="products" element={<Products />}>
        <Route path="add" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
