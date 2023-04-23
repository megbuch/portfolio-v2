import "./Hero.css";
import { useEffect } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import image from "../../assets/images/woman-with-tablet.png";

export default function Hero() {
  useEffect(() => {
    const titles = gsap.utils.toArray(".text-wrapper > p");
    const tl = gsap.timeline();

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        { opacity: 0, y: 40, rotateX: -60, stagger: 0.02, duration: 2 },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -40,
          rotateX: 60,
          stagger: 0.02,
          duration: 2,
        },
        "<1"
      );
    });
    tl.repeat(-1);
    tl.play();
  }, []);

  return (
    <>
      <section className="Hero row">
        <div>
          <h1>Meghan Bucher</h1>
          <div className="text-container">
            <div className="text-wrapper">
              <p>I'm a Software Engineer.</p>
              <p>Full Stack Developer.</p>
              <p>Front End Wizard.</p>
              <p className="accent">Creative.</p>
            </div>
            <div className="btn">
              <a href="#">Explore my work</a>
            </div>
          </div>
        </div>
        <img alt="woman holding tablet" src={image}></img>
      </section>
    </>
  );
}
