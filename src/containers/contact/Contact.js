import React from "react";
import { MdEmail } from "react-icons/md";

import contactImage from "../../assets/images/contact2.png";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="porto__contact section__padding">
      <div className="porto__contact-img">
        <img src={contactImage} alt="Juan Angela Alma" />
        <hr/>
      </div>
      <div className="porto__contact-content">
        <h1>Let's talk about everything😗</h1>
        <p>
          Let's talk about programming ask some questions about myself by
          contacting the email listed below😎. You can also offer work as a
          freelance or full time as an employee in your company🤠
        </p>
        <a href="mailto:juanangelaalma@gmail.com" className="btn-main">
          <MdEmail size={20} /> Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
