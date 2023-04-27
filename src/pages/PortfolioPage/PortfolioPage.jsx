import "./PortfolioPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../../data/projects";

library.add(faLink, faGithub);

export default function PortfolioPage() {
  return (
    <section>
      <h2>Portfolio.</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
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
