// Header.tsx

import React from 'react';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <div className="menu-bar">
      <div className='header-left'> 
        <div className="logo">Foster's Estate</div>
        <div className="sub-logo">Redlands, CA, USA</div>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        {/* Add more menu items as needed */}
      </nav>
    </div>
  );
};

export default Header;
