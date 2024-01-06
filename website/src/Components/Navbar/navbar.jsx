import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo"><img src="logo-transparent.png" alt="logo"  height={'100px'}/></div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/about">Services</a>
        <a href="/about">Blog</a>
        <a href="/about">Products</a>
        <a href="/contact">Contact</a>
      </div>

      <div className={`social-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="instagram.webp" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src="youtube.png" alt="YouTube" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
