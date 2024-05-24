import React, { useRef } from "react";
import "../Contact/Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rhjeor6", "template_g6k3ikm", form.current, {
        publicKey: "V8lPJwn25llQl0zPh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out form below to discuss any work opportunities
      </span>

      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="from_name" />
        <input type="email" className="email" placeholder="Your Email" name="Your_email"/>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="msg"
        ></textarea>
        <button type="submit" value="send" className="submitbtn">
          Submit
        </button>
      </form>

      <div className="links">
        <a
          href="https://www.linkedin.com/in/dhairya-pandya-2956a422a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} className="linkedin" />
        </a>
        <a
          href="https://github.com/Dhairya061202"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} className="github" />
        </a>
        <a
          href="https://www.instagram.com/dhairyapandya_02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} className="instagram" />
        </a>
        <a href="youtube.com">
          <FaYoutube size={25} className="youtube" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
