// src/components/FollowUs.jsx
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './FollowUs.css';

import img1 from '../assets/insta-1.png';
import img2 from '../assets/insta-2.png';
import img3 from '../assets/insta-3.png';
import img4 from '../assets/insta-4.png';
import img5 from '../assets/insta-5.png';
import img6 from '../assets/insta-6.png';
import img7 from '../assets/insta-7.png';
import img8 from '../assets/insta-8.png';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const FollowUs = () => {
  return (
    <section className="follow-us-section">
      <div className="follow-us-header">
        <div className="follow-us-text">
          <p className="follow-us-subtitle">GALLEY</p>
          <h2 className="follow-us-title">follow us</h2>
        </div>
        <a 
          href="https://www.instagram.com"
          target="_blank" 
          rel="noopener noreferrer" 
          className="instagram-cta"
        >
          <FaInstagram /> CHECK OUT OUR INSTAGRAM
        </a>
      </div>

      <div className="image-grid">
        {galleryImages.map((image, index) => (
          <div className="grid-item" key={index}>
            <LazyLoadImage
              alt={`Instagram post ${index + 1}`}
              src={image}
              effect="blur"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FollowUs;