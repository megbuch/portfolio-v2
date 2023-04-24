import "./ContactForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (recaptchaVerified) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Message sent successfully! 👌");
          },
          (error) => {
            toast.error("Failed to send message. 😕");
          }
        );
    } else {
      toast.warning("Please verify reCAPTCHA. 🤖");
    }
  };

  function onChange(value) {
    setRecaptchaVerified(!!value);
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col">
          <label>First Name *</label>
          <input required type="text" name="user_firstname" />
        </div>
        <div className="col">
          <label>Last Name *</label>
          <input required type="text" name="user_lastname" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Company</label>
          <input type="text" name="user_company" />
        </div>
        <div className="col">
          <label>Email *</label>
          <input required type="email" name="user_email" />
        </div>
      </div>
      <div className="col">
        <label>Subject *</label>
        <input required type="text" name="user_subject" />
        <label>Message *</label>
        <textarea required rows="3" name="user_message" />
        <ReCAPTCHA
          className="recaptcha"
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={onChange}
        />
        <input type="submit" value="Send Message" />
      </div>
      <ToastContainer />
    </form>
  );
}
