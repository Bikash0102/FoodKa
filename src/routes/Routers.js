import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Tracking from "../pages/Tracking";
import Home from "../pages/Home";
import Foodpages from "../pages/Foodpages";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Adress from "../pages/Adress";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foodpage" element={<Foodpages/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/tracking" element={<Tracking/>} />
      <Route path="/adress" element={<Adress/>}/>
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;
