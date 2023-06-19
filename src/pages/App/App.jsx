import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "../../components/Navigation/Navigation";
import LandingPage from "../../pages/LandingPage/LandingPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    if (theme === "") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme} container`}>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
