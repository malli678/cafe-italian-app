// src/components/Specials.jsx
import React, { useState } from 'react';
import './Specials.css';

import ribeyeImg from '../assets/special-ribeye.png';
import pastaImg from '../assets/special-grilledsteak.png';
import dessertImg from '../assets/special-chuckeyesteak.png';

const specialsData = [
  {
    name: 'Classic Ribeye Steak',
    price: '€30',
    image: ribeyeImg,
  },
  {
    name: 'Grilled Steak',
    price: '€25',
    image: pastaImg,
  },
  {
    name: 'Chuck Eye Steak',
    price: '€15',
    image: dessertImg,
  },
];

const Specials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % specialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + specialsData.length) % specialsData.length);
  };

  return (
    <section className="specials-section">
      <div className="specials-header">
        <p className="specials-subtitle">OUR MENU</p>
        <h2 className="specials-title">
          Our <span className="highlight">Specials</span>
        </h2>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          {specialsData.map((special, index) => {
            let positionClass = 'item';
            if (index === activeIndex) {
              positionClass += ' active';
            } else if (index === (activeIndex - 1 + specialsData.length) % specialsData.length) {
              positionClass += ' prev';
            } else if (index === (activeIndex + 1) % specialsData.length) {
              positionClass += ' next';
            } else {
              positionClass += ' inactive';
            }

            return (
              <div className={positionClass} key={index}>
                <div className="price-tag">{special.price}</div>
                <img src={special.image} alt={special.name} className="special-image" />
                <h3 className="special-name">{special.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="specials-nav">
        <button onClick={handlePrev} className="nav-arrow">←</button>
        <button onClick={handleNext} className="nav-arrow">→</button>
      </div>
    </section>
  );
};

export default Specials;