import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/header/Header";
import PopularMenu from "./components/popular-menu/PopularMenu";
import ChooseUs from "./components/choose-us/ChooseUs";
import MenuPack from "./components/menu-pack/MenuPack";
import Download from "./components/download-section/Download";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div style={{ margin: '105px 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ChooseUs />} />
          <Route path="/menu" element={<PopularMenu />} />
          <Route path="/recipes" element={<MenuPack />} />
          <Route path="/contact" element={<Download />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;