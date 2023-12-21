// AboutUs.js
import './AboutUs.css';
import React from 'react';

const AboutUs = () => {
  const imagesAndText = [
    {
      image: "https://cdn3.vectorstock.com/i/1000x1000/78/22/two-friends-vector-8827822.jpg",
      text: "This is the first image"
    },
    {
      image: "https://placekitten.com/200/200",
      text: "This is the second image"
    },
    {
      image: "https://placekitten.com/200/200",
      text: "This is the third image"
    }
  ];

  return (
    <div className="root-about-container">
        <div className="about-title">About Us</div>

        {imagesAndText.map((item, index) => (
          <div className="about-section" key={index}>
            {(index % 2 === 0) ? (
              <>
              <div className="about-section-inner">
                    <img className="about-image" src={item.image} alt="about" />
                    <div className="about-image-text">{item.text}</div>
                </div>
              </>
            ) : (
              <>
                <div className="about-section-inner">
                    <div className="about-text">{item.text}</div>
                    <img className="about-image" src={item.image} alt="about" />
                </div>
              </>
            )}
          </div>
        ))}

        <div className="about-content">
          <p>
            Foster's Estate is a family-owned and operated business. We have been in business since 2005 and have been
            serving the Inland Empire and surrounding areas since then. We are a full-service estate sale company that
            specializes in conducting estate sales, moving sales, and liquidations. We are licensed and insured. We have
            a large following of customers that attend our sales. We also advertise on estatesales.net, estatesales.org, estatesale.com, and estatesalesearch.com. We also advertise on Facebook and Instagram.
          </p>
        </div>
    </div>
  );
}

export default AboutUs;
