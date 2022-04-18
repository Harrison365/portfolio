import React from "react";
import Waves from "../Pictures/waves.mp4";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-main">
      <video src={Waves} autoPlay loop muted />
      <div className="profile-square"></div>
    </div>
  );
}

export default AboutMe;
