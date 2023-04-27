import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { id: 1, skill: "JavaScript", type: "language" },
    { id: 2, skill: "Python", type: "language" },
    { id: 3, skill: "HTML5", type: "language" },
    { id: 4, skill: "CSS3", type: "language" },
    { id: 5, skill: "SCSS", type: "library-framework" },
    { id: 6, skill: "React", type: "library-framework" },
    { id: 7, skill: "Express", type: "library-framework" },
    { id: 8, skill: "Node.js", type: "library-framework" },
    { id: 9, skill: "Mongoose", type: "library-framework" },
    { id: 10, skill: "Django", type: "library-framework" },
    { id: 11, skill: "MongoDB", type: "database" },
    { id: 12, skill: "PostgreSQL", type: "database" },
    { id: 14, skill: "MongoDB", type: "database" },
    { id: 15, skill: "Git", type: "other" },
    { id: 16, skill: "GitHub", type: "other" },
    { id: 17, skill: "Linux", type: "other" },
    { id: 18, skill: "Heroku", type: "other" },
    { id: 19, skill: "Netlify", type: "other" },
    { id: 20, skill: "Airtable", type: "other" },
    { id: 21, skill: "MVC Architecture", type: "other" },
    { id: 22, skill: "RESTful APIs", type: "other" },
    { id: 23, skill: "Airtable", type: "other" },
    { id: 24, skill: "Figma", type: "design" },
    { id: 25, skill: "Adobe Suite", type: "design" },
    { id: 26, skill: "Adobe Photoshop", type: "design" },
    { id: 27, skill: "UX/UI", type: "design" },
    { id: 28, skill: "Responsive Design", type: "design" },
  ];

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
