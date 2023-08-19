import React, { useState } from 'react';
import './FirstFold.css'; // Import your CSS file

const FirstFold = () => {
  const [showCentersDropdown, setShowCentersDropdown] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const [showWhoWeAreDropdown, setShowWhoWeAreDropdown] = useState(false);
  const [showEnglishDropdown, setShowEnglishDropdown] = useState(false);

  const toggleCentersDropdown = () => {
    setShowCentersDropdown(!showCentersDropdown);
  };

  const toggleProgramsDropdown = () => {
    setShowProgramsDropdown(!showProgramsDropdown);
  };

  const toggleWhoWeAreDropdown = () => {
    setShowWhoWeAreDropdown(!showWhoWeAreDropdown);
  };

  const toggleEnglishDropdown = () => {
    setShowEnglishDropdown(!showEnglishDropdown);
  };

  return (
    <div className="first-fold">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item dropdown">
            <span className="nav-link" onClick={toggleCentersDropdown}>
              Our Centers
              <span className={`dropdown-icon ${showCentersDropdown ? 'open' : ''}`}></span>
            </span>
            {showCentersDropdown && (
              <div className="dropdown-content">
                {/* Dropdown content */}
                {/* Add your dropdown list items here */}
              </div>
            )}
          </li>
          <li className="nav-item dropdown">
            {/* Similar structure for "Our Programs" */}
            <span className="nav-link" onClick={toggleProgramsDropdown}>
              Our Programs
              <span className={`dropdown-icon ${showProgramsDropdown ? 'open' : ''}`}></span>
            </span>
            {showProgramsDropdown && (
              <div className="dropdown-content">
                {/* Dropdown content */}
                {/* Add your dropdown list items here */}
              </div>
            )}
          </li>
          <li className="nav-item dropdown">
            {/* Similar structure for "Who We Are" */}
            <span className="nav-link" onClick={toggleWhoWeAreDropdown}>
              Who We Are?
              <span className={`dropdown-icon ${showWhoWeAreDropdown ? 'open' : ''}`}></span>
            </span>
            {showWhoWeAreDropdown && (
              <div className="dropdown-content">
                {/* Dropdown content */}
                {/* Add your dropdown list items here */}
              </div>
            )}
          </li>
          <li className="nav-item">
            <button className="join-us-btn">Join us</button>
          </li>
          <li className="nav-item dropdown">
            {/* Similar structure for "English" */}
            <span className="nav-link" onClick={toggleEnglishDropdown}>
              English
              <span className={`dropdown-icon ${showEnglishDropdown ? 'open' : ''}`}></span>
            </span>
            {showEnglishDropdown && (
              <div className="dropdown-content">
                {/* Dropdown content */}
                {/* Add your dropdown list items here */}
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className="navCircle"></div>
      <div className="brightCHAMPS"></div>
      <div className="bigRect"></div>
      <div className="bigRect2"></div>
      <div className="bigRect3"></div>
      <div className="bigRect4"></div>
      <div className="childImage"></div>
      <div className="bigText">Secure your kid’s future with <br/>
      <span className="highlighted">next gen-skills </span></div>
      {/* Rest of your "First Fold" section */}
      <div className="descText">Is your child ready to stand out from the crowd? Our live 1:1 online classes offer cutting-edge skills in coding, robotics, financial literacy, and communication.</div>
      <button className="btn1">Schedule a free class</button>
      <div className="harvard"></div>
      <div className="curve"></div>
      <div className="collab">In collaboration with</div>
  </div>
  );
};

export default FirstFold;
