import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import About from "./About";
import RedHook from "./RedHook";
import GlacialWays from "./GlacialWays";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/red_hook" element={<RedHook />} />
          <Route path="/glacial_ways" element={<GlacialWays />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
