import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SocialIcons.css";

library.add(faGithub, faLinkedin, faEnvelope);

export default function SocialIcons() {
  return (
    <div className="icons">
      <Link
        to="mailto: hiremeghanbucher@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link to="https://github.com/megbuch" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        to="https://linkedin.com/in/meghanbucher"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
}
