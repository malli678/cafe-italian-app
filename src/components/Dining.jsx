import React from "react";
import "./Dining.css";
import diningBg from "../assets/dining-bg.png"; // make sure this path is correct

const Dining = () => {
  return (
    <section
      className="dining-section"
      id="booking"
      style={{ backgroundImage: `url(${diningBg})` }}

    >
      {/* Overlay */}
      <div className="dining-overlay"></div>

      {/* Content Box */}
      <div className="dining-content-box">
        <p className="dining-subtitle">BOOKING</p>
        <h2 className="dining-title">
          Private &amp; <br /> Group Dining
        </h2>
        <p className="dining-description">
          At Bavette, we specialize in creating memorable dining experiences,
          whether you seek an intimate gathering or a grand celebration. Our
          private and group dining options are designed to meet your unique
          needs, with personalized service, exceptional food, and a welcoming
          atmosphere.
        </p>
        <button className="dining-cta">BOOK NOW →</button>
      </div>
    </section>
  );
};

export default Dining;