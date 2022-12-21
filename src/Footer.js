import React from "react";
import { useLocation } from "react-router-dom";
import email from "./email.png";
import ig from "./ig.png";
import imdb from "./imdb.png";
import linkedin from "./linkedin.png";

function Footer() {
  const location = useLocation();
  if (location.pathname !== "/about")
    return (
      <div className="footer">
        <a href="mailto:maxmillstein1@gmail.com" className="icon-container">
          <img className="icon" src={email} alt="email" />
        </a>
        <a
          href="https://instagram.com/maxwell_millz?igshid=YmMyMTA2M2Y="
          className="icon-container"
        >
          <img className="icon" src={ig} alt="instagram" />
        </a>
        <a
          href="https://www.imdb.com/name/nm14213652/"
          className="icon-container"
        >
          <img className="icon" src={imdb} alt="imdb" />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/max-millstein-b399b7103/"
          className="icon-container"
        >
          <img className="icon" src={linkedin} alt="linkedin" />
        </a> */}
      </div>
    );
  else return null;
}

export default Footer;
