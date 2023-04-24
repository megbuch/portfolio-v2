import "./LandingPage.css";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import resume from "../../assets/documents/resume.pdf";

export default function LandingPage() {
  return (
    <>
      <section className="Hero">
        <h1>Meghan Bucher</h1>
        <h2>software engineer & full stack developer</h2>
        <div className="row">
          <a href="#featured-projects" className="btn btn-1">
            portfolio
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
    </>
  );
}
