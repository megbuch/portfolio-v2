import "./About.css";
import headshot from "../../assets/images/headshot.jpg";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";

export default function About() {
  return (
    <section className="About">
      <div className="about-wrapper row">
        <div className="text-content">
          <h2>About.</h2>
          <p>
            Hello! My name is Meghan!
            <br />
            I'm a full stack developer based in the San Francisco Bay Area.
            <br />
            Working at the intersection of art and functionality, my passion is
            delivering engaging, memorable, and meaningful user experiences.
            <br />
            Currently, I'm developing the front end at&nbsp;
            <a target="_blank" rel="noreferrer" href="https://spacelab.space/">
              SpaceLab
            </a>
            . 🚀
          </p>
        </div>
        <div className="img-container">
          <div className="img-overlay">
            <img alt="headshot" src={headshot} />
          </div>
        </div>
      </div>
      <Skills />
      <Education />
    </section>
  );
}
