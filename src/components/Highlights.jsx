// src/components/Highlights.jsx
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Highlights.css';

import img1 from '../assets/adana-kebab.png';
import img2 from '../assets/meze-platter.png';
import img3 from '../assets/baklava.png';
import img4 from '../assets/kebab-platter.png';

const highlightsData = [
  { name: 'Adana Kebab', price: '€ 120', image: img1 },
  { name: 'Meze Platter', price: '€ 120', image: img2 },
  { name: 'Baklava', price: '€ 120', image: img3 },
  { name: 'Kebab Platter', price: '€ 120', image: img4 },
];

const Highlights = () => {
  return (
    <section className="highlights-section">
      <div className="highlights-header">
        <p className="highlights-subtitle">OUR TOP PICKS THIS MONTH</p>
        <h2 className="highlights-title">
          <span className="title-text-wrapper">Monthly Highlights</span>
        </h2>
      </div>

      <div className="highlights-grid">
        {highlightsData.map((item, index) => (
          <div className="highlight-card" key={index}>
            <LazyLoadImage
              alt={item.name}
              src={item.image}
              effect="blur"
              className="highlight-image"
            />
            <h3 className="highlight-name">{item.name}</h3>
            <p className="highlight-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;