import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/infinity.png";
import "./Navbar.css";
import "aos/dist/aos.css";

function Navbar() {
  return (
    <div data-aos="fade" className="navbar-container">
      <div className="navbar-logo">
        {/* <img className="navbar-logo-image" src={logo} /> */}
        <a href="/" id="logo">
          HR
        </a>
      </div>
      <div className="navbar-links-center">
        <a href="/#home">About Me</a>
        <a href="/#back-end">Back-End</a>
        <a href="/#front-end">Front-End</a>
        <a href="/#team-app">Team-App</a>
      </div>
      {/* <div className="navbar-links-right">
        <p>Projects</p>
        <p>About Me</p>
      </div> */}
    </div>
  );
}

export default Navbar;
