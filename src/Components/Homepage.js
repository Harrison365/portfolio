import React from "react";
import Item from "./Item";
import Car from "../Pictures/car.jpg";
import beach from "../Pictures/beach.jpg";
import lavendar from "../Pictures/lavendar.jpg";
import Trees from "../Pictures/trees.jpg";
import Road from "../Pictures/road.jpg";
import Balloon from "../Pictures/balloons.jpg";

function Homepage() {
  return (
    <div className="item-cards-container">
      <Item
        id="home"
        title="Hello, my name is Harrison."
        desc="Welcome to my portfolio website, made using React. Find out 'About Me' or scroll to see my projects."
        backgroundImg={Road}
        leftBtnTxt="About Me"
        leftBtnLink="/aboutme"
        leftBtnExt="false"
        rightBtnTxt=""
        rightBtnLink=""
        rightBtnExt=""
        twoButtons="false"
      />
      <Item
        id="back-end"
        title="Back-End Project"
        desc="Back-End for NC-News. Using Express and PostgreSQL."
        backgroundImg={Trees}
        leftBtnTxt="GitHub Repository"
        leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
        leftBtnExt="true"
        rightBtnTxt="Live API"
        rightBtnLink="https://nc-news-back-end-zg12.onrender.com/api"
        rightBtnExt="true"
        twoButtons="true"
        arrow
      />
      <Item
        id="front-end"
        title="Front-End Project"
        desc="Front-End for NC-News. Built using React."
        backgroundImg={Balloon}
        leftBtnTxt="GitHub Repository"
        leftBtnLink="https://github.com/Harrison365/fe-nc-news"
        leftBtnExt="true"
        rightBtnTxt="Live App"
        rightBtnLink="https://nc-news-front-end-hr.netlify.app/"
        rightBtnExt="true"
        twoButtons="true"
      />
      <Item
        id="DOM Manipulation Projects"
        title="DOM Manipulation Projects"
        desc="HTML, CSS and JavaScript"
        backgroundImg={beach}
        leftBtnTxt="Pairing Game"
        leftBtnLink="https://thepairinggame.netlify.app/"
        leftBtnExt="true"
        twoButtons="true"
        rightBtnTxt="GitHub Repository (Pairing Game)"
        rightBtnExt="true"
        rightBtnLink="https://github.com/Harrison365/fe-dom-mini-apps-new-m"
        thirdBtnExt="true"
        thirdBtnTxt="Paint"
        threeButtons="true"
        thirdBtnLink="https://paintwithbob.netlify.app/"
        fourthBtnExt="true"
        fourthBtnTxt="GitHub Repository (Paint)"
        fourthButtons="true"
        fourthBtnLink="https://github.com/Harrison365/paint"
      />
      <Item
        id="leccysource"
        title="3rd Party API Project"
        desc="LeccySource.com - Built using React and the National Grid Open API. Domain purchased and configured."
        backgroundImg={lavendar}
        leftBtnTxt="leccysource.com"
        leftBtnLink="https://leccysource.com/"
        leftBtnExt="true"
        rightBtnTxt="GitHub Repository"
        rightBtnLink="https://github.com/Harrison365/leccy-source"
        rightBtnExt="true"
        twoButtons="true"
      />
      <Item
        id="team-app"
        title="Full-Stack Team App"
        desc="Social Media App. A Team-Build Utilising React-Native and Firebase."
        backgroundImg={Car}
        leftBtnTxt="GitHub (Instructions / Demo)"
        leftBtnLink="https://github.com/Harrison365/UpShift"
        leftBtnExt="true"
        rightBtnTxt="Android Simulator (ExpoGo)"
        rightBtnLink="https://expo.dev/@harrison_royds/UpShift"
        rightBtnExt="true"
        twoButtons="true"
      />
    </div>
  );
}

export default Homepage;
