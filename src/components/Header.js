import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png" 
          alt="Logo" 
          className="logo-image" 
        />
        <span>Srinjay's Portfolio</span>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
