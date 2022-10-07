import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div id="navbar">
      <div className="topnav" id="myTopnav">
        <a to="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
        <NavLink onClick={myFunction} to="/">
          Home
        </NavLink>
        <NavLink onClick={myFunction} to="/about">
          About Us
        </NavLink>
        <NavLink onClick={myFunction} to="/products">
          Products
        </NavLink>
        {/* <NavLink onClick={myFunction} to="/conversions">
          Conversion Chart
        </NavLink> */}
        <NavLink onClick={myFunction} to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
