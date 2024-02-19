// Header.tsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import { MenuOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

const Header: React.FC = () => {

  const nav = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);

  const returnToHome = () => {
    if (window.location.pathname !== '/') {
      nav('/')
    }
  }

  const onClick: MenuProps['onClick'] = (e) => {
      nav(`/${e.key}`)
      setShowMenu(false);
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
      <div className="mobile-menu-icon">
        <MenuOutlined onClick={() => setShowMenu(!showMenu)} />
        <Menu
          onClick={onClick}
          style={{ display: showMenu ? 'block' : 'none', position: 'absolute', top: '60px', left: '0', width: '100%' }}
          mode="vertical"
        >
          <Menu.Item key="">Home</Menu.Item>
          <Menu.Item key="about">About us</Menu.Item>
          <Menu.Item key="services">Services</Menu.Item>
          <Menu.Item key="schedule">Schedule Appointment</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
