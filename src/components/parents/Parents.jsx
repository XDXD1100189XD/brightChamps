import React from 'react';
import './Parents.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from '../carousel/carousel';
const Parents = () => {

    return (
        <div className="parents-container">
            <div className="content">Thrilled BrightCHAMPS<span className="highlighted"> Parents</span> Speak Up.</div>
            <div className="carousel">
                <Carousel />
            </div>
            <div className="design1"></div>
            <div className="design2"></div>
        </div>
    );
};

export default Parents;