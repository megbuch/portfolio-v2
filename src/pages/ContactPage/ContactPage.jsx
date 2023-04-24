import ContactForm from "../../components/ContactForm/ContactForm";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import "./ContactPage.css";

export default function ProjectsPage() {
  return (
    <section className="ContactPage">
      <h2>Contact.</h2>
      <p>
        Send hello & connect with me!
        <br />
        <b>hiremeghanbucher@gmail.com</b>
      </p>
      <SocialIcons />
      <ContactForm />
    </section>
  );
}
