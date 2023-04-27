import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./SocialIcons.css";

library.add(faGithub, faLinkedin, faEnvelope);

export default function SocialIcons() {
  return (
    <div className="icons">
      <a
        href="mailto: hiremeghanbucher@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="Send me an Email"
        aria-label="Send me an Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://github.com/megbuch"
        target="_blank"
        rel="noreferrer"
        title="Visit my GitHub"
        aria-label="Visit my GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://linkedin.com/in/meghanbucher"
        target="_blank"
        rel="noreferrer"
        title="Visit my LinkedIn"
        aria-label="Visit my LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}
