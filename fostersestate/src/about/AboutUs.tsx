import './AboutUs.css'
import React from 'react';


const AboutUs = () => {
    return (
        <div className="root-about-container">
            <div className="about-container">
                <div className="about-image-container">
                    <div className="about-image">
                        <img src="https://placekitten.com/200/200" alt="Cover1" className="about-image" />
                    </div>
                    <div className="about-image">
                        <img src="https://placekitten.com/200/200" alt="Cover2" className="about-image" />
                    </div>
                    <div className="about-image">
                        <img src="https://placekitten.com/200/200" alt="Cover3" className="about-image" />
                    </div>    
                </div>
                <div className="about-title">About Us</div>
                <div className="about-content">
                    <p>
                    Foster's Estate is a family owned and operated business. We have been in business since 2005 and have been
                    serving the Inland Empire and surrounding areas since then. We are a full service estate sale company that
                    specializes in conducting estate sales, moving sales, and liquidations. We are licensed and insured. We have
                    a large following of customers that attend our sales. We also advertise on estatesales.net, estatesales.org, estatesale.com, and estatesalesearch.com. We also advertise on Facebook and Instagram.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
