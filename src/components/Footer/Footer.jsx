import "./Footer.css";
import { Link } from "react-router-dom";
import resume from "../../assets/documents/resume.pdf";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Footer() {
  return (
    <footer className="Footer col">
      <div className="social">
        <a href="#top" rel="noreferrer">
          to Top
        </a>
        <a
          href="https://github.com/megbuch"
          target="_blank"
          rel="noreferrer"
          title="Visit My GitHub"
          aria-label="Visit My GitHub"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/meghanbucher"
          target="_blank"
          rel="noreferrer"
          title="Visit My LinkedIn"
          aria-label="Visit My LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="mailto: hiremeghanbucher@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Send Me an Email"
          aria-label="Send Me an Email"
        >
          Email Me
        </a>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          title="View My Resume"
          aria-label="View My Resume"
        >
          Resume
        </a>
      </div>
      <div className="copyright">
        <SocialIcons />
        <p>© 2023 designed & built by Meghan Bucher</p>
      </div>
    </footer>
  );
}
