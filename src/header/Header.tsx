// Header.tsx

import React from 'react';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {

  const returnToHome = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }

  return (
    <div className="menu-bar">
      <div onClick={returnToHome} className="header-left">
        <div className='logo'>
        <img className="logo-img" src="logo.png" alt="logo" />
          Foster's Estate
        </div>
        <div onClick={returnToHome}
        className="sub-logo">Family Owned Business</div>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="#contact">Contact</a>
        <a style={{fontWeight: 600}} href="/schedule">Schedule Appointment</a>
        {/* Add more menu items as needed */}
      </nav>
    </div>
  );
};

export default Header;
