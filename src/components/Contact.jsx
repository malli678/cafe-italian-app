import React from "react";
import "./Contact.css";
import contactBg from "../assets/contact-bg.png"; // Make sure the pattern path is correct

const contactDetails = [
  {
    title: "BOOKING REQUEST",
    info: "0161 795 5502",
  },
  {
    title: "LOCATION",
    info: "2 Bury Old Road,\nManchester, M8 9JN",
  },
  {
    title: "OPENING HOURS",
    info: "Monday to Saturday\n11:00am - 11:30pm\nSunday 12:00pm - 11:00pm",
  },
];

const Contact = () => {
  return (
    <section
      className="contact-section"
      id="contact"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-header">
        <p className="contact-subtitle">CONNECT WITH US</p>
        <h2 className="contact-title">Contact Us</h2>
      </div>

      <div className="contact-grid">
        {contactDetails.map((detail, index) => (
          <div className="contact-card" key={index}>
            <h3 className="contact-card-title">{detail.title}</h3>
            <p className="contact-card-info">{detail.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;