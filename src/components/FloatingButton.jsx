// src/components/FloatingButton.jsx
import React from 'react';
import { MdOutlineDinnerDining } from "react-icons/md";
import './FloatingButton.css';

const FloatingButton = () => {
  return (
    <a href="#menu" className="floating-btn">
      <MdOutlineDinnerDining size={24} />
      <span>VIEW</span>
      <span>MENU</span>
    </a>
  );
};

export default FloatingButton;