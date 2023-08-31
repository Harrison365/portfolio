import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "aos/dist/aos.css";
import { HashLink, NavHashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div data-aos="fade" className="navbar-container">
      <div className="navbar-logo">
        <a href="/" id="logo">
          HR
        </a>
      </div>
      <div className="navbar-links-center">
        <NavHashLink to="/aboutme">
          <p>About Me</p>
        </NavHashLink>
        <NavHashLink to="/#back-end">
          <p>Back-End</p>
        </NavHashLink>
        <NavHashLink to="/#front-end">
          <p>Front-End</p>
        </NavHashLink>
        <NavHashLink to="/#dom">
          <p>DOM-Manipulation</p>
        </NavHashLink>
        <NavHashLink to="/#leccysource">
          <p>3rd Party API</p>
        </NavHashLink>
        <NavHashLink to="/#team-app">
          <p>Team-App</p>
        </NavHashLink>
      </div>
    </div>
  );
}

export default Navbar;
