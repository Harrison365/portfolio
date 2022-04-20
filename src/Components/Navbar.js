import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/infinity.png";
import "./Navbar.css";
import "aos/dist/aos.css";

function Navbar() {
  return (
    <div data-aos="fade" className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          {/* <img className="navbar-logo-image" src={logo} /> */}
          <a>HR</a>
        </Link>
      </div>
      <div className="navbar-links-center">
        <p>About Me</p>
        <p>Back-End</p>
        <p>Front End</p>
        <p>Another</p>
      </div>
      {/* <div className="navbar-links-right">
        <p>Projects</p>
        <p>About Me</p>
      </div> */}
    </div>
  );
}

export default Navbar;
