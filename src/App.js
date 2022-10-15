import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import About from "./About";
import RedHook from "./RedHook";
import GlacialWays from "./GlacialWays";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/mills-portfolio/" element={<Home />} />
          <Route path="/mills-portfolio/about" element={<About />} />
          <Route path="/mills-portfolio/red_hook" element={<RedHook />} />
          <Route
            path="/mills-portfolio/glacial_ways"
            element={<GlacialWays />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
