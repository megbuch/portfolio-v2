import "./HeroPage.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/woman-with-tablet.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight);

export default function Hero() {
  return (
    <>
      <section className="HeroPage row">
        <div>
          <h1>Meghan Bucher</h1>

          <Link to="/projects">
            <h3>
              <span>E</span>
              <span>x</span>
              <span>p</span>
              <span>l</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>&nbsp;
              <span>m</span>
              <span>y</span>&nbsp;
              <span>w</span>
              <span>o</span>
              <span>r</span>
              <span>k</span>
              <span className="icon">
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </h3>
          </Link>
        </div>
        <img alt="woman holding tablet" src={image}></img>
      </section>
    </>
  );
}
