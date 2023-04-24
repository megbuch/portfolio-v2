import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "../../components/Navigation/Navigation";
import LandingPage from "../../pages/LandingPage/LandingPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
