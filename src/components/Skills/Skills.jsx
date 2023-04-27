import "./Skills.css";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <div className="skills-wrapper">
      <h2>Skills.</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div className={`skill ${skill.type}`} key={skill.id}>
            <p>{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
