import "./Footer.css";
import SocialIcons from "../SocialIcons/SocialIcons";

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
