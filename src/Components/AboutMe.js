import React from "react";
import Waves from "../Pictures/waves.mp4";
import "./AboutMe.css";
import "aos/dist/aos.css";
import logo from "../Pictures/infinity.png";
import github from "../Pictures/github.png";
import email from "../Pictures/email.png";

function AboutMe() {
  return (
    <div className="about-me-main">
      <video src={Waves} autoPlay loop muted />
      <div data-aos="flip-left" className="profile-square">
        <div className="upper-container">
          <div className="image-container">
            {/* <img className="profile-image" src={logo} alt="logo" /> */}
            <h1 className="profile-letters">HR</h1>
          </div>
        </div>
        <div className="lower-text">
          <h1>Harrison Royds</h1>
          <h2>
            Hello. I am a full-stack software developer looking for a new
            project. I am passionate about creating great software and hungry
            for continuous learning and improvement.
          </h2>
          <h3>Tech-Stack Experience</h3>
          <li>Language: JavaScript;</li>
          <li>Front End: React, React-Native, CSS, HTML, Node.js;</li>
          <li>Backend: Express, PostgreSQL, Firebase, Node.js; </li>
          <li>Testing: Test Driven Development using Jest</li>

          <div className="buttons-container">
            <div className="profile-button">
              <a href="mailto:harrisonroyds@yahoo.co.uk">
                <img id="email-img" src={email} />
              </a>
            </div>

            <div className="profile-button">
              <img id="github-img" src={github} alt="github" />
            </div>

            <div className="profile-button">
              <img id="github-img" src={github} alt="github" />
            </div>

            <div className="profile-button">
              <img id="github-img" src={github} alt="github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
