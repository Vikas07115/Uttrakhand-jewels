import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import ProductShowcase from "./ProductShowcase";
import CustomNavbar from "./CustomNavbar";
import ModalComponent from "./components/ModalComponent";
import Profile from "./subcomponents/Profile";
import "./App.css";



function App() {
  const aboutSectionRef = useRef(null);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <CustomNavbar scrollToAbout={scrollToAbout} cartCount={cart.length} />
      <ModalComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home aboutSectionRef={aboutSectionRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductShowcase handleAddToCart={handleAddToCart} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
