import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close menu on click outside or on Escape
  useEffect(() => {
    const handleOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  return (
    <header>
      <nav className="main-nav" role="navigation" aria-label="Primary">
        <div className="nav-left">
          <ul className="nav-links left">
            <li><a href="#home">HOME</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>

        <div className="nav-logo" aria-hidden="false">
          <a href="#home" className="nav-logo-link" aria-label="Cafe Italia home">
            <img src={logo} alt="Cafe Italia Logo" />
          </a>
        </div>

        <div className="nav-right">
          <ul className="nav-links right desktop-only">
            
          </ul>

          <a href="#booking" className="nav-cta desktop-only" role="button">
            BOOK TABLE ➔
          </a>

          {/* Mobile hamburger */}
          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`mobile-menu ${open ? 'open' : ''}`}
          role="menu"
          aria-hidden={!open}
        >
          <ul>
            <li><a href="#home" onClick={() => setOpen(false)}>HOME</a></li>
            <li><a href="#menu" onClick={() => setOpen(false)}>MENU</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>ABOUT</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>CONTACT</a></li>
            <li><a href="#booking" className="mobile-book" onClick={() => setOpen(false)}>BOOK TABLE</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;