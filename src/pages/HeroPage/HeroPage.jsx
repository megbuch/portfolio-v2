import "./HeroPage.css";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

export default function Hero() {
  return (
    <>
      <section className="HeroPage">
        <div>
          <h1>Meghan Bucher</h1>
        </div>
      </section>
      <FeaturedProjects />
    </>
  );
}
