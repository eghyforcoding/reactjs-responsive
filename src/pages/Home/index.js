import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import GallerySection from "../../components/Landing/GallerySection";
import ServiceSection from "../../components/Landing/ServiceSection";
import AboutSection from "../../components/Landing/AboutSection";
import Inquiry from "../../components/Inquiry";

const Home = () => {
  return (
    <>
      <GallerySection />
      <ServiceSection />
      <AboutSection />
      <Inquiry />
    </>
  );
};

export default Home;
