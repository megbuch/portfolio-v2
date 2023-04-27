import "./AboutPage.css";
import headshot from "../../assets/images/headshot.jpg";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";

export default function AboutPage() {
  return (
    <section className="AboutPage">
      <div className="about col">
        <div className="row">
          <div className="text-content">
            <h2>About.</h2>
            <p>
              Hello! My name is Meghan. I'm a full stack developer based in the
              San Francisco Bay Area. My passion is delivering engaging,
              memorable, and meaningful user experiences. Thriving in the front
              end, I enjoy working at the intersection of art and functionality.
              Currently, I'm developing the front end at&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://spacelab.space/"
              >
                SpaceLab
              </a>
              . 🚀
            </p>
            <br />
          </div>
          <div className="img-container">
            <div className="img-overlay">
              <img
                alt="Meghan Bucher headshot"
                aria-label="Meghan Bucher headshot"
                src={headshot}
              />
            </div>
          </div>
        </div>
        <div className="skills-education">
          <Skills />
          <Education />
        </div>
      </div>
    </section>
  );
}
