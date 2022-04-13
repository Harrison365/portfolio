import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Item from "./Components/Item";
import Frog from "./Pictures/treefrog.avif";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Item
        title="Back-End Project"
        desc="Back-End for NC-News. Includes article, comment and likes data"
        // descLink=""
        backgroundImg={Frog}
        leftBtnTxt="GitHub Repository"
        leftBtnLink="https://github.com/Harrison365/NC-News-Back-End"
        righBtnTxt="Hosted API"
        rightBtnLink="https://nc-news-be-hr.herokuapp.com/api"
        twoButtons="true"
        // first
      />
    </div>
  );
}

export default App;
``;
