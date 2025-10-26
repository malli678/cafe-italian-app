// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaTripadvisor, FaGoogle, FaFacebookF } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.png'; // Your logo file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="Cafe Italia" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="footer-socials">
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://tripadvisor.com" aria-label="Tripadvisor"><FaTripadvisor /></a>
          <a href="https://google.com" aria-label="Google"><FaGoogle /></a>
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 NxtWave Training Institutions CCBP 4.0. All Rights Reserved |
          <span className="powered-by"> Powered By NxtWave Student</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;