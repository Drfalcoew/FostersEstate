// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Welcome to Foster's Estate Sale management</h1>
      <p className="intro-text">
        As a trusted and family-owned business in Redlands, California, Foster's
        Estate Sales is dedicated to providing exceptional services to the local community. Our
        team understands the importance of handling estate sales with care, compassion, and
        professionalism.
      </p>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Estate Sale Planning and Management</h3>
          <p>
            Let us take care of the entire estate sale process, from planning and organization
            to hosting the sale. Our team will ensure a smooth and successful event, maximizing
            the value of your estate assets.
          </p>
        </div>

        <div className="service">
          <h3>Appraisal and Valuation</h3>
          <p>
            Our experienced appraisers will assess the value of your estate items accurately.
            Whether it's antiques, furniture, or collectibles, we provide detailed and
            professional appraisals to help you make informed decisions.
          </p>
        </div>

        <div className="service">
          <h3>Marketing and Promotion</h3>
          <p>
            We employ effective marketing strategies to attract potential buyers to your estate
            sale. From online promotion to local advertising, we ensure maximum visibility for
            your sale event.
          </p>
        </div>

        <div className="service">
          <h3>Cleanout and Donation Assistance</h3>
          <p>
            After the sale, we offer cleanout services and can assist with item donations to
            local charities. Our goal is to make the transition as easy as possible for our
            clients.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you're considering an estate sale or need assistance with any of our services,
          please don't hesitate to reach out. We're here to help you through the entire process.
        </p>
        {/* Include your contact information here */}
      </section>
    </div>
  );
};

export default Services;
