import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import AboutMe from "./Components/AboutMe";
import ErrorPage from "./Components/ErrorPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  //AOS setup vvv
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
