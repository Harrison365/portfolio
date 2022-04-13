import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/peace.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img id="navbar-logo-image" src={logo} />
        </Link>
      </div>
      <div className="navbar-links-center">
        <p>Frog</p>
        <p>Snow</p>
      </div>
      <div className="navbar-links-right">
        <p>Projects</p>
        <p>About Me</p>
      </div>
    </div>
  );
}

export default Navbar;
