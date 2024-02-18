// Homepage.tsx

import './Homepage.css';
import { Link } from 'react-router-dom';
import Section from '../../common/section/Section';

const sectionInformation = [
  {
    title: 'Professional Estate Sale Management',
    description: 'Trust FostersEstate for expert estate sale management. Our team ensures a seamless process, providing peace of mind during your estate sale.',
    id: 'about',
    image: 'sectionIcons/professional.png'
  },
  {
    title: 'Local Expertise in Redlands',
    description: 'FostersEstate, your local experts in Redlands. We understand the local market intricacies for a tailored and successful estate sale.',
    id: 'services',
    image: 'sectionIcons/local.png'
  },
  {
    title: 'Transparent and Fair Fees',
    description: 'Choose FostersEstate for transparent and fair fees. We communicate upfront, taking a percentage of the sale with clarity and integrity.',
    id: 'services',
    image: 'sectionIcons/price.png'
  }
];

const Homepage = () => {
  return (
    <div>
      <div id='/' className="homepage-container">
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
        <div className='cover-image-container'>
          <div className="cover-image">
            <img src="/covers/estate_sale_4.jpg" alt="Cover" className="cover-image" />
          </div>
        </div>
      </div>
        <Section sections={sectionInformation} />
      </div>
    );
  };
  
  export default Homepage;