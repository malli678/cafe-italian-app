// src/components/Menu.jsx
import React from 'react';
import './Menu.css';

// Import the images you just saved
import italianDish from '../assets/menu-italian.jpg';
import pastry from '../assets/menu-pastry.jpg';
import coffee from '../assets/menu-coffee.png';

// Menu data in an array for easy mapping
const menuCategories = [
  {
    title: 'Italian dishes',
    image: italianDish,
    link: '#italian-menu'
  },
  {
    title: 'Pastry',
    image: pastry,
    link: '#pastry-menu'
  },
  {
    title: 'Coffee',
    image: coffee,
    link: '#coffee-menu'
  }
];

const Menu = () => {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <p className="menu-subtitle">EXPLORE MENU</p>
        <h2 className="menu-title">Our Menu</h2>
      </div>

      <div className="menu-grid">
        {menuCategories.map((category, index) => (
          <div className="menu-card" key={index}>
            <img src={category.image} alt={category.title} className="menu-card-bg" />
            <div className="menu-card-overlay">
              <div className="menu-card-content">
                <h3 className="menu-card-title">{category.title}</h3>
                <a href={category.link} className="menu-card-link">VIEW MENU</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-footer">
        <button className="menu-main-cta">
          VIEW MENU →
        </button>
      </div>
    </section>
  );
};

export default Menu;