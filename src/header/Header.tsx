// Header.tsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {

  const nav = useNavigate();

  const returnToHome = () => {
    if (window.location.pathname !== '/') {
      nav('/')
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
        <Link to ="/">Home</Link>
        <Link to ="/about">About us</Link>
        <Link to ="/services">Services</Link>
        <a href="#contact">Contact</a>
        <Link style={{ fontWeight: 600 }} to ="/schedule">Schedule Appointment</Link>
      </nav>
    </div>
  );
};

export default Header;
