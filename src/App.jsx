import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import PopularMenu from "./components/popular-menu/PopularMenu";
import ChooseUs from "./components/choose-us/ChooseUs";
import MenuPack from "./components/menu-pack/MenuPack";
import Download from "./components/download-section/Download";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Header />
      <div className="my-28 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<ChooseUs />} />
         <Route path="/menu" element={<><PopularMenu /><MenuPack /></>} />
          <Route path="/contact" element={<Download />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
