import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">
      <div className="topnav" id="myTopnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About / Contact</NavLink>
        <div>
          <h1 className="max_nav_bar">MAX MILLSTEIN</h1>
          <h3>WRITER · DIRECTOR</h3>
        </div>
        <NavLink to="/red_hook">Red Hook</NavLink>
        <NavLink to="/glacial_ways">Glacial Ways</NavLink>
        {/* <NavLink onClick={myFunction} to="/glacial_ways">
          Glacial Ways
        </NavLink> */}
      </div>
    </div>
  );
}

export default Navbar;
