import React from "react";
import Waves from "../Pictures/waves.mp4";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  return (
    <div className="about-me-main">
      <video src={Waves} autoPlay loop muted />
      <div data-aos="flip-left" className="profile-square">
        <div className="box-text">
          <h1 id="about-me-h1">Hello. My name is Harrison Royds.</h1>
          <br />
          <h2>
            I am a full-stack developer looking for a new project and excited to
            continuously learn.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
