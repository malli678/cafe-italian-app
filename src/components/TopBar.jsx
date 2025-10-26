import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar" role="region" aria-label="Restaurant contact and opening hours">
      <div className="top-bar-inner">
        <div className="top-bar-info" aria-hidden="false">
          <span className="top-bar-item">📍 2 Bury Old Road, Manchester, Mj642$</span>
          <span className="top-bar-item">🕒 Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm</span>
        </div>

        <div className="top-bar-contact" aria-hidden="false">
          <span className="top-bar-item">📞 <a href="tel:+441617955502">01xx5345502</a></span>
          <span className="top-bar-item">📧 <a href="mailto:reservations@istanbuirestaurantmanchester.co.uk">Click Me</a></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;