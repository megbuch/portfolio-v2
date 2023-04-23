import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>First Name *</label>
      <input type="text" name="user_firstname" />
      <label>Last Name *</label>
      <input type="text" name="user_lastname" />
      <label>Company</label>
      <input type="text" name="user_company" />
      <label>Email Address*</label>
      <input type="email" name="user_email" />
      <label>Subject *</label>
      <input type="text" name="user_subject" />
      <label>Message *</label>
      <textarea name="user_message" />
      <input type="submit" value="Send" />
    </form>
  );
}
