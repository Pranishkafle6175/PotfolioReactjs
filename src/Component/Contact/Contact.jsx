import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntdt4mw",
        "template_c6rd7xh",
        form.current,
        "QK-kqYD33U-8GfLfV"
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
    <div className="c-wrapper">
      <div className="left">
        <span>Get in touch</span>
        <span>Contact me</span>
      </div>
      <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <input
            type="text"
            name="message"
            className="user"
            placeholder="Text"
          />
          <input
            type="submit"
            value="Send"
            name="button"
            className=" button"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
