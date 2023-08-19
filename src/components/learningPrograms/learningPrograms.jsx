import React from 'react';
import './learningPrograms.css'; // Import your CSS file for styling

const LearningPrograms = () => {
    return (
        <div className="outer2">
            <div className="learning-programs" style={{ backgroundColor: "#3D4D5D" }}>
                <div className="heading-container">
                    Be Future ready with <br /><div className="highlighter">Next gen skills</div>
                </div>
                {/* Content of the Learning Programs component */}
                <div className="card-collage">
                    <div className="card-container card1">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image1" ></div>
                        <h2 className="heading">RoboCHAMPS</h2>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                    <div className="card-container card2">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image2"></div>
                        <h2 className="heading">CodeCHAMPS</h2>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                    <div className="card-container card3">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image3"></div>
                        <h2 className="heading">FinCHAMPS</h2>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                    <div className="card-container card4">
                        <div className="top-right-background"></div>
                        <div className="main-image main-image4"></div>
                        <h2 className="heading">LingoCHAMPS</h2>
                        <p className="description">Build aero-bots, super bots & fight robowars with kids across the globe</p>
                        <button className="explore-button">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningPrograms;