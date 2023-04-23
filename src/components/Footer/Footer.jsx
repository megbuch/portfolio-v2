import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";

library.add(faGithub, faLinkedin, faEnvelope);

export default function Footer() {
  return (
    <footer className="Footer col">
      <a href="#top" rel="noreferrer">
        Back to top
      </a>
      <SocialIcons />
      <p>© 2023 designed & built by Meghan Bucher</p>
    </footer>
  );
}
