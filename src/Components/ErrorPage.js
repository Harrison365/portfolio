import React from "react";
import "./ErrorPage.css";
import Balloons from "../Pictures/balloons.jpg";
import Penguin from "../Pictures/penguin.mp4";

function ErrorPage() {
  return (
    <div className="container">
      <video src={Penguin} autoPlay loop muted />
      <div className="error-message">
        <h1>Error: Sorry, this page doesn't exist.</h1>
        <br />
        <a href="/">
          <h3>Click Here to Head Home</h3>
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
