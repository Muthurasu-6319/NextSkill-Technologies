import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className="navbar">
      <div className="navBrand">
        <img src={Logo} alt="Logo" className="logoImage" />
      </div>

      <div className={`navLinks ${menuActive ? 'mobileActive' : ''}`}>
        <a href="#home" className="navLink active">Home</a>
        <a href="#programs" className="navLink">Programs</a>
        <a href="#services" className="navLink">Services</a>
        <a href="#events" className="navLink">Events</a>
        <a href="#hiring" className="navLink">Hiring</a>
        <a href="#about" className="navLink">About Us</a>
        <a href="#contact" className="navLink">Contact</a>
      </div>

      <div className="navActions">
        <a href="#signup" className="signUpButton">sign up</a>
      </div>

      <button className="menuToggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}
