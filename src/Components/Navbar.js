import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/peace.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img id="navbar-logo-image" src={logo} />
        </Link>
        <div className="navbar-links">
          <Link to="/">Projects</Link>
          <Link to="/">About Me</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
