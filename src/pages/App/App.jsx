import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "../../components/Navigation/Navigation";
import HeroPage from "../../pages/HeroPage/HeroPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
