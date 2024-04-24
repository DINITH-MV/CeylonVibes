import React, { useState, useEffect } from "react";
import axios from "axios";
import GradientOpen from "../components/Home/Content/GradientOpen.jsx";
import HeaderText from "../components/Home/Content/HeaderText.jsx";
import GradientClose from "../components/Home/Content/GradientClose.jsx";
import TextGrid from "../components/Home/Content/TextGrid.jsx";
import FoodCatagory from "../components/Home/Content/FoodCatagory.jsx";
import Header from "../components/Home/Header/Header.jsx";
import GradientOpen2 from "../components/Home/Content/GradientOpen2.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ShopInside from "./ShopInside.jsx";
import CarouselAnimation from "../components/Home/Content/CarouselAnimation.jsx";
import Banner from "../components/Home/Content/Banner.jsx";
import GradientClose2 from "../components/Home/Content/GradientClose2.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { motion } from "framer-motion";
import { GlobalproductsInCart } from "./ShopInside.jsx";
import { useUser } from '@clerk/clerk-react';
import HeaderText1 from "@/components/Home/Content/HeaderText1.jsx";
import HeaderText2 from "@/components/Home/Content/HeaderText2.jsx";
import HeaderText3 from "@/components/Home/Content/HeaderText3.jsx";


const Home = ({ catagories, fetchCatagories, offers, fetchOffers }) => {



  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 1 / 10,
        }}
      >
        <Header />
        <div>
          <HeaderText />
          <div className="bg-[#ffb372] h-[570px] w-[100%] mb-0 "></div>
          <GradientOpen />
          <HeaderText1 />
          <GradientClose />
          <div className="bg-[#ffb372] h-[440px] w-[100%] ">
            <HeaderText2 />
          </div>
          <GradientOpen2 />
          <HeaderText3 />
          <GradientClose2 />
          <div className="bg-[#ffb372] h-[755px] w-[100%] mb-0 relative">
            <CarouselAnimation offers={offers} fetchOffers={fetchOffers} />
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
