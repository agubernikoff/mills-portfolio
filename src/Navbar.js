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
        <NavLink style={activeStyle} to="/mills-portfolio/">
          Home
        </NavLink>
        <NavLink style={activeStyle} to="/mills-portfolio/about">
          About / Contact
        </NavLink>
        <div>
          <h1 className="max_nav_bar">MAX MILLSTEIN</h1>
          <h3 className="subhead">WRITER · DIRECTOR</h3>
        </div>
        <NavLink style={activeStyle} to="/mills-portfolio/red_hook">
          Red Hook
        </NavLink>
        <NavLink style={activeStyle} to="/mills-portfolio/glacial_ways">
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
