import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import AboutMe from "./Components/AboutMe";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  //AOS setup vvv
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      {/* Routes here to get home page and about me (see fe-nc-news) */}
    </div>
  );
}

export default App;
