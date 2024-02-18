// AboutUs.js
import Section from '../common/section/Section';
import './AboutUs.css';
import React from 'react';

const AboutUs = () => {

  const aboutUs = "Founded by brothers Blake and Drew Foster, our family-owned business is dedicated to providing personalized and professional services. "
   + "With a passion for antiques and a commitment to preserving legacies, we offer hands-on estate sale solutions tailored to your unique needs. Whether you're downsizing or managing a loved one's estate, our team ensures a seamless process from start to finish. "
  + "At Foster Brothers, we prioritize integrity, passion, and community. Let us handle your estate sale with the care it deserves, making it a stress-free and rewarding experience. Discover the Foster Brother's difference today. ";
  
  const sectionInformation = [
    {
      title: 'Blake Foster',
      description: 'Blake Foster is the owner of Foster\'s Estate Services. He has been in the estate sale business since 2005. ' + 
      'He is a graduate of the Missouri Auction School. He is a member of the American Society of Estate Liquidators.',
      id: 'about',
      image: 'https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg'
    },
    {
      title: 'Drew Foster',
      description: 'Drew Foster is the owner of Foster\'s Estate Services. He has been in the estate sale business since 2005. ' +
      'He is a graduate of the Missouri Auction School. He is a member of the American Society of Estate Liquidators.',
      id: '1',
      image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/257493556/original/c7b833983586d61c5541a555a2a71bb4848f8ccd/make-logo-design-and-cartoon-style-profile-photo-thank-you-for-choosing.jpg',
    },
  ];

  return (
    <div>
      <div id='/' className="homepage-container">
        <div className="cover-image">
          <img src="covers/fosters_estate_5.jpg" alt="Cover" className="cover-image" />
        </div>
        <div className="content-container">
          <div className="text-section">
            <div className="about-us-logo-container">
              <img className="about-us-logo" src="logo.png" alt="logo" onClick={() => window.location.href = '/logo.png'} />
              <h1 className="business-name">About Us</h1>
            </div>
            <p className="business-description">
              {aboutUs}
            </p>
          </div>
        </div>
      </div>
        <div className='meet-team-container'>
          <Section sections={sectionInformation} />
        </div>
      </div>
    );
}

export default AboutUs;
