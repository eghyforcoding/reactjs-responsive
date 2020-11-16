import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import { homeObjone } from "../../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const cartIncrement = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        cartIncrement={cartIncrement}
        cartCount={cartCount}
      /> */}
      <HeroSection />
      <InfoSection {...homeObjone} />
    </>
  );
};

export default Home;
