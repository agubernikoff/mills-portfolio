import React from "react";
import biopic from "./biopic.png";
import email from "./email.png";
import ig from "./ig.png";
import imdb from "./imdb.png";
import linkedin from "./linkedin.png";
import { useNavigate } from "react-router-dom";

function About() {
  const nav = useNavigate();
  return (
    <div>
      <div className="aboutpage">
        <h1>ABOUT / CONTACT</h1>
        <div className="about-container">
          <img className="biopic" src={biopic} alt="max millstein" />
          <div className="max_text">
            <h1>MEET MAX</h1>
            <p>
              Max Millstein is an award winning writer/director living in
              Brooklyn, NY. His directorial debut short film titled Red Hook hit
              the festival circuit in October 2022. He is currently in
              post-production with his second short film -- a whimsical and
              evocative climate change awareness story. Max primarily writes
              drama/thriller features.
              <br></br>
              <br></br>A data analyst consultant during the day, Max is no
              stranger to creating budgets and managing projects with fast
              deadlines. Understanding the practicality and collaborative nature
              of film, Max is able to bring his grandiose visions into fruition.
            </p>
            <h1>LET'S WORK TOGETHER</h1>

            <a
              href="mailto:maxmillstein1@gmail.com"
              className="about-icon-container"
            >
              <img className="about-icon" src={email} alt="email" />
              <span>maxmillstein1@gmail.com</span>
            </a>
            <div>
              <img
                onClick={() =>
                  (window.location =
                    "https://instagram.com/maxwell_millz?igshid=YmMyMTA2M2Y=")
                }
                className="about-icon"
                src={ig}
                alt="instagram"
              />
              <img
                onClick={() =>
                  (window.location = "https://www.imdb.com/name/nm14213652/")
                }
                style={{ width: "10%", cursor: "pointer" }}
                src={imdb}
                alt="imdb"
              />
              <img
                className="about-icon"
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/max-millstein-b399b7103/")
                }
                src={linkedin}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
