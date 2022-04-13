import React from "react";
import Button from "./Button";

function Item({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  righBtnTxt,
  rightBtnLink,
  twoButtons,
}) {
  return (
    <div className="item" style={{}}>
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
        </div>
      </div>
    </div>
  );
}

export default Item;
