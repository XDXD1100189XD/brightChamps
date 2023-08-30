import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = () => {
    const slides = [
        {
            image: "Person1.png",
            heading: "Product Design",
            description: "My son really enjoys his classes. His teacher is patient and kind and simplifies topics well.",
            name: "Father of Daniel Agustomo",
            class: "Class 2nd | Indonesia"
        },
        {
            image: "Mask Group (3).png",
            heading: "Custom Website",
            description: "BrightCHAMPS' global competitions improved my son's coding skills and communication abilities.",
            name: "Father of Muhtasim Noor",
            class: "Class 3rd | Bangladesh"
        },
        {
            image: "Mask Group (4).png",
            heading: "Digital Marketing",
            description: "We can easily adjust class schedules to accommodate my son's school and activities.",
            name: "Mother of Lidya Varjaya",
            class: "Class 9th | Indonesia"
        }, {
            image: "Mask Group (5).png",
            heading: "Product Design",
            description: "The teachers make an effort to understand what my child’s pace of learning is and adapt the curriculum and teaching strategies accordingly.",
            name: "Mother of Swathi Reddy",
            class: "Class 8th | India"
        },
        {
            image: "Mask Group (6).png",
            heading: "Custom Website",
            description: "The curriculum at FinCHAMPS is aptly designed not only to capture the current financial concepts but also upcoming ones like cryptocurrency and NFT.",
            name: "Father of Vimal Mishra",
            class: "Class 9th | India"
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
                <div className="inner" style={{ transform: `translateX(-${activeSlide * 20.22222}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="card" key={index}>
                            <div className={"Image"+index} id="Image"></div>
                            <div className="content2">
                            <div className="content3">
                                <h3 className="desc">"{slide.description}"</h3>
                                <h2 className="pname">{slide.name}</h2>
                                <h4 className="edu">{slide.class}</h4>
                            </div>
                            </div>
                            <div className="secImage"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="map">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${index === activeSlide ? 'active' : ''
                            } `}
                        onClick={() => handleButtonClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
