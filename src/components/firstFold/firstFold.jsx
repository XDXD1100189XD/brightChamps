import React, { useState } from 'react';
import './FirstFold.css'; // Import your CSS file

const FirstFold = () => {
  const [dropdownStates, setDropdownStates] = useState({
    centers: false,
    programs: false,
    whoWeAre: false,
    english: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <div className="first-fold">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item dropdown">
            <span className="nav-link" onClick={() => toggleDropdown('centers')}>
              Our Centers
              <span className={`dropdown-icon ${dropdownStates.centers ? 'open' : ''}`}></span>
            </span>
            {dropdownStates.centers && (
              <div className="dropdown-content">
                {/* Content for the centers dropdown */}
              </div>
            )}
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link" onClick={() => toggleDropdown('programs')}>
              Our Programs
              <span className={`dropdown-icon ${dropdownStates.programs ? 'open' : ''}`}></span>
            </span>
            {dropdownStates.centers && (
              <div className="dropdown-content">
                {/* Content for the centers dropdown */}
              </div>
            )}
          </li>
          <li className="nav-item dropdown">

            <span className="nav-link" onClick={() => toggleDropdown('whoWeAre')}>
              Who We are?
              <span className={`dropdown-icon ${dropdownStates.whoWeAre ? 'open' : ''}`}></span>
            </span>
            {dropdownStates.centers && (
              <div className="dropdown-content">
                {/* Content for the centers dropdown */}
              </div>
            )}
          </li>
          <li className="nav-item dropdown">

            <span className="nav-link" onClick={() => toggleDropdown('english')}>
              English
              <span className={`dropdown-icon ${dropdownStates.english ? 'open' : ''}`}></span>
            </span>
            {dropdownStates.centers && (
              <div className="dropdown-content">
                {/* Content for the centers dropdown */}
              </div>
            )}
          </li>
          <li className="nav-item">
            <button className="join-us-btn">Join us</button>
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
      <div className="bigText">Secure your kid’s future with <br />
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
