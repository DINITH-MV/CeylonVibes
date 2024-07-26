import React, { useState } from "react";
import Shop from "./pages/OrganicItems/Shop.jsx";
import { Route, Routes } from "react-router";
import ShopInside from "./pages/OrganicItems/ShopInside.jsx";
import axios from "axios";
import "./App.css"
import { SignedOut } from "@clerk/clerk-react";
import SignInPage from "./components/Header/sign-in.jsx";
import UserProfilePage from "./components/Header/user-profile.jsx";
import UpdateCatagory from "./pages/Admin Dashboard/Organic Items/UpdateCatagory.jsx";
import AddCatagory from "./pages/Admin Dashboard/Organic Items/AddCatagory.jsx";
import ItemsCatagory from "./pages/Admin Dashboard/Organic Items/ItemsCatagory.jsx";
import AddItemsCatagory from "./pages/Admin Dashboard/Organic Items/AddItemsCatagory.jsx";
import UpdateItemsCatagory from "./pages/Admin Dashboard/Organic Items/UpdateItemsCatagory.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Search from "./pages/Admin Dashboard/Organic Items/Search.jsx";
import OrganicItems from "./pages/Admin Dashboard/Organic Items/OrganicItems.jsx";
import Home from "./pages/Home/Home.jsx";
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
import BookingAdminHome from "./pages/Admin Dashboard/Tours/BookingAdminHome.jsx";
import CreateTours from "./pages/Admin Dashboard/Tours/CreateTours.jsx";
import EditTours from "./pages/Admin Dashboard/Tours/EditTours.jsx";
import DeleteTours from "./pages/Admin Dashboard/Tours/DeleteTours.jsx";
import ShowTours from "./pages/Admin Dashboard/Tours/ShowTours.jsx";
import DeleteBooking from "./pages/Admin Dashboard/Tours/DeleteBookings.jsx";
import ShowBookings from "./pages/Admin Dashboard/Tours/ShowBookings.jsx";
import TourAdminHome from "./pages/Admin Dashboard/Tours/TourAdminHome.jsx";
import PaymentAdmin from "./components/Admin/Bill/admindash.jsx";
import Payhistory from "./components/Admin/Bill/Paymenthis.jsx";
import AcceptedSlips from "./components/Admin/Bill/Acceptedslips.jsx";
import ReceivedSlips from "./components/Admin/Bill/ReceivedSlips.jsx";
import ConnectedLinkComponent from "./pages/Admin Dashboard/payment/slipview.jsx";
import AdminAppointment from "./pages/Admin Dashboard/SPA/AdminAppointment.jsx";

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
      <Route path="/" element={<Home catagories={catagories} fetchCatagories={fetchCatagories} offers={offers} fetchOffers={fetchOffers} />} />
      <Route path="/Shop" element={<Shop catagories={catagories} fetchCatagories={fetchCatagories} offers={offers} fetchOffers={fetchOffers} />} />
      <Route
        path="/shopInside/:id"
        element={<ShopInside nuts={nuts} fetchNuts={fetchNuts} snacks={snacks} fetchSnacks={fetchSnacks} sweetners={sweetners} fetchSweetners={fetchSweetners} fetchCartItems={fetchCart} cartItems={cart} />}
      />

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignedOut />} />
      <Route path="/profile" element={<UserProfilePage />} />

      for admin panel

      {/* For Products */}
      <Route path="admin" element={<Admin />} >
        <Route path="dashboard" element={<Search />} />
        <Route path="OrganicItems" element={<OrganicItems />} />
        <Route path="AddCatagory" element={<AddCatagory fetchCatagories={fetchCatagories} />} />
        <Route path="ItemsCatagory/:id" element={<ItemsCatagory />} />
        <Route path="AddItemsCatagory/:id" element={<AddItemsCatagory fetchItemsCatagory={fetchItemsCatagory} />} />
        <Route path="updateCatagory/:id" element={<UpdateCatagory />} />
        <Route path="updateItemsCatagory/:id" element={<UpdateItemsCatagory />} />

        <Route path="spa" element={<SpaCategory />} />
        <Route path="spa-menu-edit-service" element={<MenuEditPage />} />
        <Route path="classical-spa-rituals-edit-service" element={<ClassicalEditPage />} />
        <Route path="spaAppointment" element={<AdminAppointment />} />
        <Route path="ayurvedicSpaMenu/createMenu" element={<CreateMenu />} />
        <Route path="classicalSpaRituals/createclassical" element={<CreateClassical />} />
        <Route path="ayurvedicSpaMenu/edit/:id" element={<EditMenu />} />
        <Route path="classicalSpaRituals/edit/:id" element={<EditClassical />} />
        <Route path="ayurvedicSpaMenu/details/:id" element={<ShowMenu />} />
        <Route path="classicalSpaRituals/details/:id" element={<ShowClassical />} />
        <Route path="ayurvedicSpaMenu/delete/:id" element={<DeleteMenu />} />
        <Route path="classicalSpaRituals/delete/:id" element={<DeleteClassical />} />
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
        <Route path="editevent/:eventId" element={<UpdateEventForm />} />

        <Route path="tours" element={<TourAdminHome />} />
        <Route path="create" element={<CreateTours />} />
        <Route path="tedit/:id" element={<EditTours />} />
        <Route path="tdelete/:id" element={<DeleteTours />} />
        <Route path="tdetails/:id" element={<ShowTours />} />
        <Route path="bookings" element={<BookingAdminHome />} />
        <Route path="bdelete/:id" element={<DeleteBooking />} />
        <Route path="bdetails/:id" element={<ShowBookings />} />

        <Route path="payment" element={<PaymentAdmin />} />
        <Route path="paymentss" element={<Payhistory />} />
        <Route path="acceptedslips" element={<AcceptedSlips />} />
        <Route path="received" element={<ReceivedSlips />} />
        <Route path="viewslip" element={<ConnectedLinkComponent />} />

      </Route>

    </Routes>
  );
};

export default App;
