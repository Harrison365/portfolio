import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/* Routes here to get home page and about me (see fe-nc-news) */}
    </div>
  );
}

export default App;
