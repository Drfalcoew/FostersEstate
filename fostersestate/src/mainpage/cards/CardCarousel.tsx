import React from "react"
import { Carousel } from 'antd';
import './CardCarousel.css';

interface Card {
    title: string,
    description: string,
    image: string,
    link: string
}
// pass in Card array
const CardCarousel: React.FC<{ cards: Card[] }> = ({ cards }) => {
    const emptyCard: Card = {
        title: 'Empty Card',
        description: 'This is an empty card',
        image: 'https://via.placeholder.com/150',
        link: '#'
    }
    
    const cardsData = cards ? cards : [emptyCard];

    return (
        <Carousel autoplay>
            {cardsData.map((card) => (
                <div className='card' key={card.title}>
                    <img src={card.image} alt={card.title} />
                    <div className='card-content'>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <a href={card.link}>Learn More</a>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default CardCarousel;