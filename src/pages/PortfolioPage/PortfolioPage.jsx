import "./PortfolioPage.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../../data/projects";

library.add(faLink, faGithub);

export default function PortfolioPage() {
  const [showAllProjects, setShowAllProjects] = useState(true);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [showWorkProjects, setShowWorkProjects] = useState(false);

  let filteredProjects = [];

  if (showAllProjects) {
    filteredProjects = projects;
  } else if (showPersonalProjects) {
    filteredProjects = projects.filter(
      (project) => project.category === "personal"
    );
  } else if (showWorkProjects) {
    filteredProjects = projects.filter(
      (project) => project.category === "work"
    );
  }

  return (
    <section>
      <h2>Portfolio.</h2>
      <div className="portfolio-buttons">
        <button
          className={`btn ${showAllProjects ? "active" : ""}`}
          onClick={() => {
            setShowAllProjects(true);
            setShowPersonalProjects(false);
            setShowWorkProjects(false);
          }}
        >
          all
        </button>
        <button
          className={`btn ${showPersonalProjects ? "active" : ""}`}
          onClick={() => {
            setShowAllProjects(false);
            setShowPersonalProjects(true);
            setShowWorkProjects(false);
          }}
        >
          personal
        </button>
        <button
          className={`btn ${showWorkProjects ? "active" : ""}`}
          onClick={() => {
            setShowAllProjects(false);
            setShowPersonalProjects(false);
            setShowWorkProjects(true);
          }}
        >
          work
        </button>
      </div>
      <div className="portfolio-container">
        {filteredProjects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.mockup})` }}
            >
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="icons">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    title={project.titleGithub}
                    aria-label={project.ariaLabelGithub}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      aria-label={project.ariaLabelGithub}
                    />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    title={project.titleLive}
                    aria-label={project.ariaLabelLive}
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      aria-label={project.ariaLabelLive}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
