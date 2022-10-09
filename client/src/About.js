import React from "react";
import biopic from "./biopic.png";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="aboutpage">
        <h2>ABOUT / CONTACT</h2>
        <img className="biopic" src={biopic} />
        <div className="max_text">
          <h3>MEET MAX</h3>
          <p>
            Max Millstein is writer/director living in Brooklyn, NY. His
            directorial debut short film titled Red Hook hit the festival
            circuit in October 2022. He is currently in post-production with his
            second short film -- a whimsical and evocative climate change
            awareness piece. Max primarily writes drama/thriller features.
            <br></br>
            <br></br>A data analyst consultant during the day, Max is no
            stranger to creating budgets and managing projects with fast
            deadlines. Understanding the practicality and collaborative nature
            of film, Max is able to bring his grandiose visions into fruition.
          </p>
          <div className="work_together">
            <h3>LETS WORK TOGETHER</h3>
            <p>Email: maxmillstein1@gmail.com</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
