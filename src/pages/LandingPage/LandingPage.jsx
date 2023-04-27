import "./LandingPage.css";
import { Link } from "react-router-dom";
import FeaturedProjects from "../../components/FeaturedWork/FeaturedWork";
import resume from "../../assets/documents/resume.pdf";

export default function LandingPage() {
  return (
    <>
      <section className="Hero">
        <h1>Meghan Bucher</h1>
        <h2>software engineer & full stack developer</h2>
        <div className="row">
          <a href="#featured-work" className="btn btn-1">
            Featured
          </a>
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            className="btn btn-2"
          >
            Resume
          </a>
        </div>
      </section>
      <FeaturedProjects />

      <Link className="btn btn-3" to="/portfolio">
        See More
      </Link>
    </>
  );
}
