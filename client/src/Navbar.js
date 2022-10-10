import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          color: "grey",
        }
      : null;
  return (
    <div id="navbar">
      <div className="topnav" id="myTopnav">
        <NavLink style={activeStyle} to="/">
          Home
        </NavLink>
        <NavLink style={activeStyle} to="/about">
          About / Contact
        </NavLink>
        <div>
          <h1 className="max_nav_bar">MAX MILLSTEIN</h1>
          <h3>WRITER · DIRECTOR</h3>
        </div>
        <NavLink style={activeStyle} to="/red_hook">
          Red Hook
        </NavLink>
        <NavLink style={activeStyle} to="/glacial_ways">
          Glacial Ways
        </NavLink>
        {/* <NavLink onClick={myFunction} to="/glacial_ways">
          Glacial Ways
        </NavLink> */}
      </div>
    </div>
  );
}

export default Navbar;
