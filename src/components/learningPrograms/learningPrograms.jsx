import React from 'react';
import './learningPrograms.css'; // Import your CSS file for styling

const LearningPrograms = () => {
    return (
        <div className="learning-programs">
            <div className="heading-container">
                Be Future ready with <br /><div className="highlighter">Next gen skills</div>
            </div>
            {/* Content of the Learning Programs component */}
            <div className="card-collage">
                <div className="card-container card1">
                    <div className="top-right-background"></div>
                    <img className="main-image" src="robot (3) 1.png" alt="Main" />
                    <h2 className="heading">RoboCHAMPS</h2>
                    <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                    <button className="explore-button">Explore Now</button>
                </div>
                <div className="card-container card2">
                    <div className="top-right-background"></div>
                    <img className="main-image" src="Group 11721.png" alt="Main" />
                    <h2 className="heading">CodeCHAMPS</h2>
                    <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                    <button className="explore-button">Explore Now</button>
                </div>
                <div className="card-container card3">
                    <div className="top-right-background"></div>
                    <img className="main-image" src="increase 3.png" alt="Main" />
                    <h2 className="heading">FinCHAMPS</h2>
                    <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                    <button className="explore-button">Explore Now</button>
                </div>
                <div className="card-container card4">
                    <div className="top-right-background"></div>
                    <img className="main-image" src="translation 1.png" alt="Main" />
                    <h2 className="heading">LingoCHAMPS</h2>
                    <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                    <button className="explore-button">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default LearningPrograms;