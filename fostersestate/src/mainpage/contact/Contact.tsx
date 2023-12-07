// ContactFooter.tsx

import React from 'react';
import './Contact.css'; // Import the CSS file
import { FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons';

const Contact: React.FC = () => {

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
            text: <a>(555) 123-4567</a>,
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


    return (
        <div className="contact-footer">
          <div className="contact-info">
            <h3>Contact Us</h3>
            {contactInfo.map((contact) => (
              <div className="contact-info-item" key={contact.text.toString()}>
                {contact.icon} {contact.text}
              </div>
            ))}
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>

            <div className="social-media-icons">
              {socialMedia.map((social) => (
                <a href={social.link} key={social.name}>
                  {social.icon} {social.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      );
};

export default Contact;
