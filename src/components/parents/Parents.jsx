import React from 'react';
import './Parents.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from '../carousel/carousel';
const Parents = () => {
    const carouselData = [
        {
            image: 'image1.jpg',
            heading: 'Card 1',
            description: 'Description for Card 1',
        },
        {
            image: 'image2.jpg',
            heading: 'Card 2',
            description: 'Description for Card 2',
        },
        {
            image: 'image3.jpg',
            heading: 'Card 3',
            description: 'Description for Card 3',
        },{
            image: 'image1.jpg',
            heading: 'Card 1',
            description: 'Description for Card 1',
        },
        {
            image: 'image2.jpg',
            heading: 'Card 2',
            description: 'Description for Card 2',
        },
        {
            image: 'image3.jpg',
            heading: 'Card 3',
            description: 'Description for Card 3',
        }
        // Add more data objects as needed
    ];

    return (
        <div>
            <h1>Carousel Example</h1>
            <Carousel/>
        </div>
    );
};

export default Parents;