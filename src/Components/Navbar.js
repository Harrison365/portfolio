import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/infinity.png";
import "./Navbar.css";
import "aos/dist/aos.css";
import { HashLink, NavHashLink } from "react-router-hash-link";

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
        {/* <a href="/">About Me</a>
        <a href="/#back-end">Back-End</a>
        <a href="/#front-end">Front-End</a>
        <a href="/#team-app">Team-App</a> */}
        <NavHashLink to="/aboutme">
          <p>About Me</p>
        </NavHashLink>
        <NavHashLink to="/#back-end">
          <p>Back-End</p>
        </NavHashLink>
        <NavHashLink to="/#front-end">
          <p>Front-End</p>
        </NavHashLink>
        <NavHashLink to="/#team-app">
          <p>Team-App</p>
        </NavHashLink>
      </div>
      {/* <div className="navbar-links-right">
        <p>Projects</p>
        <p>About Me</p>
      </div> */}
    </div>
  );
}

export default Navbar;
