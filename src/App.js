import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Login";
import AddProduct from "./pages/addProduct";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Product from "./pages/Product/";
import Treatment from "./pages/Treatment";
import ContactUs from "./pages/Contact Us";
import { DataProvider } from "./components/context";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const cartIncrement = () => {
    setCartCount(cartCount + 1);
  };

  const pushCart = (cart) => {
    console.log("---cart----");
  };

  return (
    <DataProvider>
      <Router className="router">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar
          toggle={toggle}
          cartIncrement={cartIncrement}
          cartCount={cartCount}
        />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/addProduct" component={AddProduct} exact />
          <Route path="/shop" component={Product} pushCart={pushCart} exact />
          <Route path="/treatment" component={Treatment} exact />
          <Route path="/contactus" component={ContactUs} exact />
          <Route path="/cart" component={Cart} pushCart={pushCart} exact />
        </Switch>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
