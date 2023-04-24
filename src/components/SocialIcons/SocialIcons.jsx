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
      <a
        href="mailto: hiremeghanbucher@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/megbuch" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://linkedin.com/in/meghanbucher"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}
