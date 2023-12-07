import React from 'react';
import Homepage from './mainpage/cover/Homepage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Schedule from './schedule/Schedule';
import Header from './header/Header';
import Contact from './mainpage/contact/Contact';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <div id='about' className='section'>
          <h2>About Us</h2>
          <p>
            Foster's Estate is a family-owned business that has been serving the community for over 30 years.
            We are a full-service estate sale company that specializes in the liquidation of personal property.
            We are committed to providing you with the highest level of service and professionalism.
            We are dedicated to making your estate sale experience as stress-free as possible.
          </p>
        </div>
        <div id='services' className='section'>
          <h2>Our Services</h2>
          <p>
            We offer a variety of services to meet your needs.
            We can help you with everything from the initial consultation to the final clean out.
            We will work with you to determine what services are best for your situation.
            Our goal is to make this process as easy and stress-free as possible.
          </p>
        </div>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
