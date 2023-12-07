// Homepage.tsx

import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
      <div id='home' className="homepage-container">
        <div className="cover-image">
          {/* You can replace the 'cover.jpg' with the actual image you want to use */}
          <img src="cover.jpg" alt="Cover" className="cover-image" />
        </div>
        <div className="content-container">
          <div className="text-section">
            <h1 className="business-name">Foster's Estate</h1>
            <p className="business-description">
            Elevate Your Estate Sale Experience with FostersEstate: Where Every Item Tells a Story, and Every Sale is a Success!
            </p>
          </div>
          <Link to="/schedule">
            <button className="schedule-button">Schedule Now</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Homepage;