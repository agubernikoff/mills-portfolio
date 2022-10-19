import React from "react";
import biopic from "./biopic.png";
import email from "./email.png";
import ig from "./ig.png";
import vimeo from "./vimeo.png";

function About() {
  return (
    <div>
      <div className="aboutpage">
        <h1>ABOUT / CONTACT</h1>
        <div className="about-container">
          <img className="biopic" src={biopic} alt="max millstein" />
          <div className="max_text">
            <h1>MEET MAX</h1>
            <p>
              Max Millstein is writer/director living in Brooklyn, NY. His
              directorial debut short film titled Red Hook hit the festival
              circuit in October 2022. He is currently in post-production with
              his second short film -- a whimsical and evocative climate change
              awareness piece. Max primarily writes drama/thriller features.
              <br></br>
              <br></br>A data analyst consultant during the day, Max is no
              stranger to creating budgets and managing projects with fast
              deadlines. Understanding the practicality and collaborative nature
              of film, Max is able to bring his grandiose visions into fruition.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
