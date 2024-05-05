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
import UpdateCatagory from "./pages/Admin Dashboard/Organic Items/UpdateCatagory.jsx";
import AddCatagory from "./pages/Admin Dashboard/Organic Items/AddCatagory.jsx";
import ItemsCatagory from "./pages/Admin Dashboard/Organic Items/ItemsCatagory.jsx";
import AddItemsCatagory from "./pages/Admin Dashboard/Organic Items/AddItemsCatagory.jsx";
import UpdateItemsCatagory from "./pages/Admin Dashboard/Organic Items/UpdateItemsCatagory.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Search from "./pages/Admin Dashboard/Organic Items/Search.jsx";
import AddProduct from "./pages/Admin Dashboard/Organic Items/AddProduct.jsx";
import OrganicItems from "./pages/Admin Dashboard/Organic Items/OrganicItems.jsx";
import Home from "./pages/Home.jsx";
import SpaCategory from "./pages/Admin Dashboard/SPA/SpaCategory.jsx";
import MenuEditPage from "./pages/Admin Dashboard/SPA/SpaMenuEdit.jsx";
import ClassicalEditPage from "./pages/Admin Dashboard/SPA/ClassicalSpaEdit.jsx";
import EditMenu from "./components/Admin/Spa/editMenu.jsx";
import ShowMenu from "./components/Admin/Spa/showMenu.jsx";
import EditClassical from "./components/Admin/Spa/editClassical.jsx";
import ShowClassical from "./components/Admin/Spa/showClassical.jsx";
import CreateMenu from "./components/Admin/Spa/createMenu.jsx";
import CreateClassical from "./components/Admin/Spa/createeClassical.jsx";
import DeleteMenu from "./components/Admin/Spa/deleteMenu.jsx";
import DeleteClassical from "./components/Admin/Spa/deleteClassical.jsx";
import SPAREPORTGENERATIONPAGE from "./pages/Admin Dashboard/SPA/SpaReportGeneration.jsx";
import AdminArticleList from "./pages/Admin Dashboard/Articles/AdminArticleView.jsx";
import UpdateArticleForm from "./pages/Admin Dashboard/Articles/UpdateArticle.jsx";
import AddArticleForm from "./pages/Admin Dashboard/Articles/AddArticleForm.jsx";
import AdminCarList from "./pages/Admin Dashboard/Rentals/AdminViewCars.jsx";
import UpdateCarForm from "./pages/Admin Dashboard/Rentals/UpdateCarForm.jsx";
import AddCarForm from "./pages/Admin Dashboard/Rentals/AddCarsForm.jsx";
import AdminRentList from "./pages/Admin Dashboard/Rentals/AdminViewRents.jsx";
import EventPage from "./pages/Admin Dashboard/Events/EventPage.jsx";
import EventForm from "./components/Admin/Events/eventadd.jsx";
import UpdateEventForm from "./components/Admin/Events/eventsedit.jsx";
import BookingAdminHome from "./pages/Admin Dashboard/Tours/TourAdminHome.jsx";

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
      <Route path="/Home" element={<Home catagories={catagories} fetchCatagories={fetchCatagories} offers={offers} fetchOffers={fetchOffers} />} />

      for admin panel

      {/* For Products */}
      <Route path="admin" element={<Admin />} >
        <Route path="search" element={<Search />} />
        <Route path="OrganicItems" element={<OrganicItems />} />
        <Route path="AddCatagory" element={<AddCatagory fetchCatagories={fetchCatagories} />} />
        <Route path="ItemsCatagory/:id" element={<ItemsCatagory />} />
        <Route path="AddItemsCatagory/:id" element={<AddItemsCatagory fetchItemsCatagory={fetchItemsCatagory} />} />
        <Route path="updateCatagory/:id" element={<UpdateCatagory />} />
        <Route path="updateItemsCatagory/:id" element={<UpdateItemsCatagory />} />

        <Route path="spa" element={<SpaCategory />} />
        <Route path="spa-menu-edit-service" element={<MenuEditPage />} />
        <Route path="classical-spa-rituals-edit-service" element={<ClassicalEditPage />} />
        <Route path="ayurvedicSpaMenu/createMenu" element={<CreateMenu />} />
        <Route path="classicalSpaRituals/createclassical" element={<CreateClassical/>} />
        <Route path="ayurvedicSpaMenu/edit/:id" element={<EditMenu/>}/>
        <Route path="classicalSpaRituals/edit/:id" element={<EditClassical/>}/>
        <Route path="ayurvedicSpaMenu/details/:id" element={<ShowMenu/>}/>
        <Route path="classicalSpaRituals/details/:id" element={<ShowClassical/>}/>
        <Route path="ayurvedicSpaMenu/delete/:id" element={<DeleteMenu/>}/>
        <Route path="classicalSpaRituals/delete/:id" element={<DeleteClassical/>}/>
        <Route path="generate-report" element={<SPAREPORTGENERATIONPAGE />} />

        <Route path="articles" element={<AdminArticleList />} />
        <Route path="update-article/:id" element={<UpdateArticleForm />} />
        <Route path="add-article" element={<AddArticleForm />} />

        <Route path="rentals" element={<AdminCarList />} />
        <Route path="update-car/:id" element={<UpdateCarForm />} />
        <Route path="add-car" element={<AddCarForm />} />
        <Route path="admin-rent" element={<AdminRentList />} />

        <Route path="events" element={<EventPage />} />
        <Route path="addevent" element={<EventForm />} />  
        <Route path="editevent/:eventId" element={<UpdateEventForm/>} /> 

        <Route path="tours" element={<BookingAdminHome />} />
        <Route path='/tours/create' element={<CreateTours />} />
        
      </Route>


      {/* For Spa */}
      {/* <Route path="/spaadmin" element={<SPAADMINHOMEPAGE />} /> */}
      {/* <Route path="/spa-menu-edit-service" element={<MenuEditPage />} /> */}
      {/* <Route path="/generate-report" element={<SPAREPORTGENERATIONPAGE />} />
      <Route path="/ayurvedicSpaMenu/createMenu" element={<CreateMenu />} />
      <Route path="/ayurvedicSpaMenu/details/:id" element={<ShowMenu/>}/>
      <Route path="/ayurvedicSpaMenu/edit/:id" element={<EditMenu/>}/>
      <Route path="/ayurvedicSpaMenu/delete/:id" element={<DeleteMenu/>}/>
      <Route path="/classicalSpaRituals/createclassical" element={<CreateClassical/>} />
      <Route path="/classicalSpaRituals/details/:id" element={<ShowClassical/>}/>
      <Route path="/classicalSpaRituals/edit/:id" element={<EditClassical/>}/>
      <Route path="/classicalSpaRituals/delete/:id" element={<DeleteClassical/>}/>
      <Route path="/spa-admin-appointment" element={<AdminAppointment/>}/> */}
    </Routes>
  );
};

export default App;
