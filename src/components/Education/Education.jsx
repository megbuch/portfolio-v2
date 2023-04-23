import "./Education.css";

export default function Education() {
  return (
    <div className="education-wrapper">
      <h2>Education.</h2>
      <div className="row">
        <p className="education-card">
          <b>
            B.S. Business Administration,
            <br />
            Management Information Systems
          </b>
          <br />
          San Jose State University
          <br />
          Est. Grad. June 2025
          <br />
          <br />
          <b>A.S. Business Administration</b>
          <br />
          De Anza College
          <br />
          Grad. June 2020
        </p>
        <p className="education-card">
          <b>Software Engineering Immersive</b>
          <br />
          General Assembly
          <br />
          Cert. Awarded March 2023
          <br />
          <br />
          <b>Certified Scrum Master</b>
          <br />
          Scrum Alliance
          <br />
          Cert. Awarded March 2023
        </p>
      </div>
    </div>
  );
}
