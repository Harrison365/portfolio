import React, { useEffect } from "react";
import Button from "./Button";
import "./Item.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Item({
  id,
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  leftBtnExt,
  rightBtnTxt,
  rightBtnLink,
  rightBtnExt,
  twoButtons,
  threeButtons,
  thirdBtnTxt,
  fourthButtons,
  fourthBtnExt,
  fourthBtnTxt,
  fourthBtnLink,
  arrow,
}) {
  return (
    <div id={id}>
      <div
        className="item"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div data-aos="fade-up" className="item-container">
          <div className="item-text">
            <p>{title}</p>
            <div className="item-text-desc">
              <p>{desc}</p>
            </div>
          </div>
          <div className="item-lower-third">
            <div className="item-buttons">
              <Button
                imp="primary"
                text={leftBtnTxt}
                link={leftBtnLink}
                ext={leftBtnExt}
              />
              {/* conditionally rendering second button if twoButtons === true */}
              {twoButtons === "true" && (
                <Button
                  imp="secondary"
                  text={rightBtnTxt}
                  link={rightBtnLink}
                  ext={rightBtnExt}
                />
              )}
              {threeButtons === "true" && (
                <Button
                  imp="primary"
                  text={thirdBtnTxt}
                  link={rightBtnLink}
                  ext={rightBtnExt}
                />
              )}
              {fourthButtons === "true" && (
                <Button
                  imp="secondary"
                  text={fourthBtnTxt}
                  link={fourthBtnLink}
                  ext={fourthBtnExt}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
