import React, { useEffect, useState } from "react";
import Shop from "./pages/Shop.jsx";
import FoodCatagory from "./components/Organic Items/Content/FoodCatagory.jsx";
import { Route, Router, Routes } from "react-router";
import ShopInside from "./pages/ShopInside.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Reports from "./pages/Reports.jsx";
import Products from "./pages/Products.jsx";
import axios from "axios";
import Admin from "./Admin/Admin.jsx";
import AddCatagory from "./Admin/AddCatagory.jsx";
import Image from "./components/Organic Items/Content/image.jsx";
import "./App.css"
import UpdateCatagory from "./Admin/UpdateCatagory.jsx";
import ItemsCatagory from "./Admin/ItemsCatagory.jsx";
import AddItemsCatagory from "./Admin/AddItemsCatagory.jsx";
import UpdateItemsCatagory from "./Admin/UpdateItemsCatagory.jsx";
import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile, ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./components/Header/sign-in.jsx";
import UserProfilePage  from "./components/Header/user-profile.jsx";

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

  // for cart
//   const fetchCart = () => {
//     fetch("http://localhost:5000/list")
//         .then((res) => res.json())
//         .then((data) => {
//             setCart(data);
//             console.log(cart)
//         });
// };
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
        <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Shop catagories={catagories} fetchCatagories={fetchCatagories} offers={offers} fetchOffers={fetchOffers} />} /> */}
          <Route path="/reports" element={<Reports />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/shopInside/:id"
            element={<ShopInside nuts={nuts} fetchNuts={fetchNuts} snacks={snacks} fetchSnacks={fetchSnacks} sweetners={sweetners} fetchSweetners={fetchSweetners} fetchCartItems={fetchCart} cartItems={cart}/>}
          />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignedOut />} />
          <Route path="/profile" element={<UserProfilePage />} />

          for admin panel
          <Route path="/" element={<Admin/>} />
          <Route path="/addCatagory" element={<AddCatagory fetchCatagories={fetchCatagories} />} />
          <Route path="/updateCatagory/:id" element={<UpdateCatagory fetchCatagories={fetchCatagories} />} />
          <Route path="/ItemsCatagory/:id" element={<ItemsCatagory />} />
          <Route path="/addItemsCatagory" element={<AddItemsCatagory fetchItemsCatagory={fetchItemsCatagory} />} />
          <Route path="/updateItemsCatagory/:id" element={<UpdateItemsCatagory fetchCatagories={fetchCatagories} />} />
        </Routes>
      </BrowserRouter> 
   
  );
};

export default App;
