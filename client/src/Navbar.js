import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname.includes("red"));
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
        <NavLink
          onClick={myFunction}
          to="/"
          style={location.pathname.includes("red") ? { color: "white" } : null}
        >
          Home
        </NavLink>
        <NavLink
          onClick={myFunction}
          to="/about"
          style={location.pathname.includes("red") ? { color: "white" } : null}
        >
          About/Contact
        </NavLink>
        <NavLink
          onClick={myFunction}
          to="/red_hook"
          style={location.pathname.includes("red") ? { color: "white" } : null}
        >
          Red Hook
        </NavLink>
        {/* <NavLink onClick={myFunction} to="/glacial_ways">
          Glacial Ways
        </NavLink> */}
      </div>
    </div>
  );
}

export default Navbar;
