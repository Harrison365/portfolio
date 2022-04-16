import React from "react";
import Item from "./Item";
import Forest from "../Pictures/forest.jpg";
import Trees from "../Pictures/trees.jpg";
import Road from "../Pictures/road.jpg";

function Homepage() {
  return (
    <div className="item-cards-container">
      <Item
        title="Hello, my name is Harrison."
        desc="Welcome to my portfolio website. Please scroll to see my projects."
        // descLink=""
        backgroundImg={Road}
        leftBtnTxt="About Me"
        leftBtnLink="/aboutme"
        rightBtnTxt=""
        rightBtnLink=""
        twoButtons="false"
        arrow //="true"
      />
      <Item
        title="Back-End Project"
        desc="Back-End for NC-News. Using Express and PostgreSQL"
        // descLink=""
        backgroundImg={Trees}
        leftBtnTxt="GitHub Repository"
        leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
        rightBtnTxt="Live API"
        rightBtnLink="https://nc-news-be-hr.herokuapp.com/api"
        twoButtons="true"
        arrow
      />
      <Item
        title="Front-End Project"
        desc="Front-End for NC-News. Built using React"
        // descLink=""
        backgroundImg={Forest}
        leftBtnTxt="GitHub Repository"
        leftBtnLink="https://github.com/Harrison365/fe-nc-news"
        rightBtnTxt="Live App"
        rightBtnLink="https://nc-news-front-end-hr.netlify.app/"
        twoButtons="true"
      />
    </div>
  );
}

export default Homepage;
