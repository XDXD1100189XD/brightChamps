import React from 'react';
import './learningPrograms.css'; // Import your CSS file for styling

const LearningPrograms = () => {
    return (

        <div className="learning-programs" >
            <div className="outer2">
                <div className="heading-container">
                    Be Future ready with <br /><div className="highlighter">Next gen skills</div>
                </div>
                {/* Content of the Learning Programs component */}
                <div className="card-collage">
                    <div className="card-container card1">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image1" ></div>
                        <div className="heading">RoboCHAMPS</div>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                    <div className="card-container card2">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image2"></div>
                        <div className="heading">CodeCHAMPS</div>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                    <div className="card-container card3">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image3"></div>
                        <div className="heading">FinCHAMPS</div>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                    <div className="card-container card4">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image4"></div>
                        <div className="heading">LingoCHAMPS</div>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default LearningPrograms;