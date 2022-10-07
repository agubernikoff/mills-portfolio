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
        <div className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </div>
        <NavLink onClick={myFunction} to="/">
          Home
        </NavLink>
        <NavLink onClick={myFunction} to="/about">
          About/Contact
        </NavLink>
        <NavLink onClick={myFunction} to="/red_hook">
          Red Hook
        </NavLink>
        <NavLink onClick={myFunction} to="/glacial_ways">
          Glacial Ways
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
