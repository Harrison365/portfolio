import React from "react";
import Button from "./Button";
import Arrow from "../Pictures/down-arrow.png";
import "./Item.css";

function Item({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  arrow,
}) {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
          <div className="item-text-desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item-lower-third">
          <div className="item-buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {/* Here we are conditionally rendering the second button depending on if twoButtons passed is true or not. vvv */}
            {twoButtons && <Button imp="secondary" text={rightBtnTxt} />}
          </div>
          {arrow && (
            <div className="down-arrow">
              <img id="down-arrow-image" src={Arrow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
