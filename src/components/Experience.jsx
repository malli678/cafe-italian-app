import React from 'react';
import './Experience.css';

// Import images (replace with your real paths)
import foodImg from '../assets/experience-food.png';
import drinksImg from '../assets/experience-drinks.png';
import atmosphereImg from '../assets/experience-atmosphere.png';

const experienceData = [
  {
    title: 'Food',
    description:
      'Bavette was born from a passion for bringing the finest cuts of meat to Manchester, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our expert chefs.',
    image: foodImg,
  },
  {
    title: 'Drinks',
    description:
      'Bavette was born from a passion for bringing the finest cuts of meat to Manchester, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our expert chefs.',
    image: drinksImg,
  },
  {
    title: 'Atmosphere',
    description:
      'Bavette was born from a passion for bringing the finest cuts of meat to Manchester, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our expert chefs.',
    image: atmosphereImg,
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <p className="experience-subtitle">WE OFFER</p>
        <h2 className="experience-title">
          Unforgettable Dining <span>Experience</span>
        </h2>
      </div>

      <div className="experience-list">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="experience-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="experience-overlay"></div>
            <div className="experience-content">
              <h3 className="experience-item-title">{item.title}</h3>
              <p className="experience-item-description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;