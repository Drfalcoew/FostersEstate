// ContactFooter.tsx

import React from 'react';
import './Contact.css'; // Import the CSS file
import { FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons';

const Contact: React.FC = () => {

    const generateRandomId = () => {
        return Math.random().toString(36).substr(2, 9);
    }


    const contactInfo = [
        {
            icon: <MailOutlined className='icon' />,
            text: <a href="mailto:blake@fostersestate.com">blake@fostersestate.com</a>,
            link: '#'
        },
        {
            icon: <MailOutlined className='icon' />,
            text: <a href="mailto:drew@fostersestate.com">drew@fostersestate.com</a>,
            link: '#'
        },
        {
            icon: <PhoneOutlined className='icon' />,
            text: <>(555) 123-4567</>,
            link: '#'
        }
    ];


    const socialMedia = [
        {
            name: 'Facebook',
            icon: <FacebookOutlined className='icon' />,
            link: '#/'
        },
        {
            name: 'Twitter',
            icon: <TwitterOutlined className='icon' />,
            link: '#/'
        },
        {
            name: 'Instagram',
            icon: <InstagramOutlined className='icon' />,
            link: '#/'
        }
    ];

    const cities = [
      "Redlands", "Highland", "Loma Linda", "Yucaipa", "Mentone", "Colton", "Grand Terrace", "Calimesa", "Beaumont", "San Bernardino" ];


    return (
        <div id='contact' className="contact-footer">
          <div className="contact-info">
            <h3>Contact Us</h3>
            {contactInfo.map((contact) => (
              <div className="contact-info-item" key={generateRandomId()}>
                {contact.icon} {contact.text}
              </div>
            ))}
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              {socialMedia.map((social) => (
                <a href={social.link} key={generateRandomId()}>
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>

        <div className="cities">
          <h3>Cities We Serve</h3>
          <div className='cities-list-container'>
            {cities.map((city) => (
              <ul className="cities-list" key={generateRandomId()}>
                <li>{city}</li>
              </ul>
            ))
            }
            </div>
        </div>

        </div>
      );
};

export default Contact;
