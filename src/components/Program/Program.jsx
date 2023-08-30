import React from 'react';
import './Program.css';
import { useParams } from 'react-router-dom';
const Program = () => {
    const Url={
        "CodeCHAMPS":"https://www.youtube.com/embed/fxnCViVFZ2Y",
        "RoboCHAMPS":"https://www.youtube.com/embed/CqjJwF00D6w",
        "FinCHAMPS":"https://www.youtube.com/embed/YotxBidUPuU",
        "LingoCHAMPS":"https://www.youtube.com/embed/qdDIgXZB0e8"
    }
    const { programName } = useParams();
    return (
        <div className="outer7">
            <div className="bg1">
                <div className="design1 des2"></div>
            </div>
            <div className="programs-container">
                <div className="faq-heading heading2">
                    Checkout what a <br/>
                    <span className="highlighter2 high2" style={{height: "150px"}}>{programName} </span>
                     class
                    looks like?
                </div>
                <div className="sub-text">Preview a BrightCHAMPS session for kids</div>
                <div className="main-video"><iframe className="vid" src={Url[programName]}>
                </iframe></div>
                <div className="ending">
                    <div className="e-text"> Don't wait start your journey</div>
                    <button className="btn4">Book Your first Class</button>
                </div>
            </div>
        </div>
    )
}

export default Program