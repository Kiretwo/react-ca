import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "./components/CartContext";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/Product/ProductDetails";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App;
