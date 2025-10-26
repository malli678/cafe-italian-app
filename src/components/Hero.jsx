import React, { useEffect, useRef } from "react";
import "./Hero.css";
import heroVideo from "../assets/hero-bg.mp4"; // <-- your video file here

const Hero = () => {
  const heroRef = useRef(null);

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      hero.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section ref={heroRef} className="hero-section" aria-label="Hero Section">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for dark gradient */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome To <span>Cafe Italia</span>
        </h1>
        <a href="#menu" className="hero-cta" role="button">
          View Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
