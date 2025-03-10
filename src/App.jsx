import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "./components/CartContext";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App;
