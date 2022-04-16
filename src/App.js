import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Item from "./Components/Item";
import Forest from "./Pictures/forest.jpg";
import Trees from "./Pictures/trees.jpg";
import Road from "./Pictures/road.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import Penguin from "./Pictures/penguin.mp4";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="item-cards-container">
        <Item
          title="Hello, my name is Harrison."
          desc="Welcome to my portfolio website. Please scroll to see my projects."
          // descLink=""
          backgroundImg={Road}
          leftBtnTxt="GitHub Repository"
          leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
          rightBtnTxt="Hosted API"
          rightBtnLink="https://nc-news-be-hr.herokuapp.com/api"
          twoButtons="false"
          arrow //="true"
        />
        <Item
          title="Back-End Project"
          desc="Back-End for NC-News. Includes article, comment and likes data"
          // descLink=""
          backgroundImg={Trees}
          leftBtnTxt="GitHub Repository"
          leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
          rightBtnTxt="Hosted API"
          rightBtnLink="https://nc-news-be-hr.herokuapp.com/api"
          twoButtons="true"
          arrow
        />
        <Item
          title="Back-End Project"
          desc="Back-End for NC-News. Includes article, comment and likes data"
          // descLink=""
          backgroundImg={Forest}
          leftBtnTxt="GitHub Repository"
          leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
          rightBtnTxt="Hosted API"
          rightBtnLink="https://nc-news-be-hr.herokuapp.com/api"
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
