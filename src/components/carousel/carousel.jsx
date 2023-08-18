import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = () => {
    const slides = [
        {
            image: "https://colorlib.com/preview/theme/seogo/img/case_study/1.png",
            heading: "Product Design",
            description: "UI/UX, Design"
        },
        {
            image: "https://colorlib.com/preview/theme/seogo/img/case_study/2.png",
            heading: "Custom Website",
            description: "UI/UX, Design"
        },
        {
            image: "https://colorlib.com/preview/theme/seogo/img/case_study/3.png",
            heading: "Digital Marketing",
            description: "UI/UX, Design"
        },{
            image: "https://colorlib.com/preview/theme/seogo/img/case_study/1.png",
            heading: "Product Design",
            description: "UI/UX, Design"
        },
        {
            image: "https://colorlib.com/preview/theme/seogo/img/case_study/2.png",
            heading: "Custom Website",
            description: "UI/UX, Design"
        },
        {
            image: "https://colorlib.com/preview/theme/seogo/img/case_study/3.png",
            heading: "Digital Marketing",
            description: "UI/UX, Design"
        }
        // Add more slide data as needed
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    const handleButtonClick = (index) => {
        setActiveSlide(index);
    };

    return (
        <div className="center">
            <div className="wrapper">
                <div className="inner" style={{ transform: `translateX(-${activeSlide * 16.666}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="card" key={index}>
                            <img src={slide.image} alt={`Slide ${index}`} />
                            <div className="content">
                                <h1>{slide.heading}</h1>
                                <h3>{slide.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="map">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${
                            index === activeSlide ? 'active' : ''
                        } ${index === 0 ? 'first' : ''} ${index === 1 ? 'second' : ''} ${
                            index === 2 ? 'third' : ''
                        }`}
                        onClick={() => handleButtonClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
