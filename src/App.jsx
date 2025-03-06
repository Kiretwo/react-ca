import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App;
