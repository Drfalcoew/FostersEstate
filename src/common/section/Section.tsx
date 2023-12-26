import React from "react";
import './Section.css';
import { Image } from "antd";

interface SectionProps {
    title: string,
    description: string,
    id: string,
    image: string
}

const Section: React.FC<{ sections: SectionProps[] }> = ({ sections }) => {
    return (
        <div className='section-container'>
            {sections.map((section) => (
                <div className="section">
                    <Image className="section-image" src={section.image} preview={false}/>
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