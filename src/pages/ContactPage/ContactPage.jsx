import ContactForm from "../../components/ContactForm/ContactForm";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import "./ContactPage.css";

export default function ProjectsPage() {
  return (
    <section className="ContactPage">
      <h2>Contact.</h2>
      <p>
        I'm currently seeking new opportunities.
        <br />
        Say hello & get in touch with me!
        <br />
        hiremeghanbucher@gmail.com
      </p>
      <SocialIcons />
      <ContactForm />
    </section>
  );
}
