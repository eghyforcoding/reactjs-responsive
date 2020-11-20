import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Login";
import AddProduct from "./pages/addProduct";
import AboutUs from "./pages/About Us";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Product from "./pages/Product/";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact Us";
import TreatmentType from "./pages/TreatmentType";
import Appointment from "./pages/Appointment";
import { DataProvider } from "./components/context";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function check(item) {
    console.log("item", item);
  }

  return (
    <DataProvider>
      <Router className="router">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/aboutus" component={AboutUs} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/addProduct" component={AddProduct} exact />
          <Route path="/shop" component={Product} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/treatment/:type" component={TreatmentType} exact />
          <Route path="/contactus" component={ContactUs} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/appointment" component={Appointment} exact />
        </Switch>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
