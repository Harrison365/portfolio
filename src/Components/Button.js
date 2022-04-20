import React from "react";
import "./Button.css";

function Button({ imp, text, link, ext }) {
  return (
    <a href={link} target={ext == "true" ? "_blank" : ""}>
      <div className={imp == "secondary" ? "button-white" : "button"}>
        <p>{text}</p>
      </div>
    </a>
  );
}

export default Button;
