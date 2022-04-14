import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Item from "./Components/Item";
import Forest from "./Pictures/forest.jpg";
import Trees from "./Pictures/trees.jpg";
import Road from "./Pictures/road.jpg";
// import Penguin from "./Pictures/penguin.mp4";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="item-cards-container">
        <Item
          title="Back-End Project"
          desc="Back-End for NC-News. Includes article, comment and likes data"
          // descLink=""
          backgroundImg={Road}
          leftBtnTxt="GitHub Repository"
          leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
          rightBtnTxt="Hosted API"
          rightBtnLink="https://nc-news-be-hr.herokuapp.com/api"
          twoButtons="true"
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
