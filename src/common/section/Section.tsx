import React from "react";
import './Section.css';
import { Image } from "antd";
import { SectionProps } from "../../Types";

const Section: React.FC<{ sections: SectionProps[] }> = ({ sections }) => {
    return (
        <div className='section-container'>
            {sections.map((section) => (
                <div className="section">
                    <div className="section-image-container">
                        <Image className="section-image" src={section.image} preview={false}/>
                    </div>                        
                    <div className="section-text">
                        <h2 className="section-title">{section.title}</h2>
                        <p className="section-description">{section.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Section;