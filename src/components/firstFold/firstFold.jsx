import React, { useState, useRef, useEffect } from 'react';
import './FirstFold.css'; // Import your CSS file
import { Link } from "react-router-dom";
const FirstFold = () => {
  const [dropdownStates, setDropdownStates] = useState({
    centers: false,
    programs: false,
    whoWeAre: false,
    english: false,
  });
  const dropdownRefs = {
    centers: useRef(null),
    programs: useRef(null),
    whoWeAre: useRef(null),
    english: useRef(null),
  };
  useEffect(() => {
    function handleClickOutside(event) {
      Object.keys(dropdownRefs).forEach((dropdownName) => {
        if (
          dropdownRefs[dropdownName].current &&
          !dropdownRefs[dropdownName].current.contains(event.target)
        ) {
          setDropdownStates((prevState) => ({
            ...prevState,
            [dropdownName]: false,
          }));
        }
      });
    }

    // Add an event listener for the "mousedown" event
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefs]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 860 && window.innerWidth >= 1250) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    // Add an event listener for the "scroll" event
    window.addEventListener("scroll", handleScroll);

    // Clean up: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = isFixed
    ? {
        position: "fixed",
        top: "-310px",
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: 0,
        paddingTop: "10px",
        paddingLeft:"360px",
        background: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25), transparent) rgb(94, 63, 224)", 
        borderRadius: "300px",
        height: "400px",
        display: "flex", // Use flexbox to align items
      justifyContent: "flex-end", // Align items to the right
        transition: "opacity 0.3s ease-in-out"// Add your desired background color
      }
    : {};
    
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  return (
    <div className="first-fold">
      {!mobileNavOpen && (
        <div className="mobile-nav-icon" onClick={toggleMobileNav}>
          <span className="mobile-icon">&#9776;</span>
        </div>
      )}

      {/* Close button */}
      {mobileNavOpen && (
        <div className="close-btn" onClick={toggleMobileNav}>
          &times;
        </div>
      )}

      {/* Mobile Navbar */}
      <nav className={`mobile-navbar ${mobileNavOpen ? 'open3' : ''}`}>
      <ul className="mobile-nav-list">
        <li className="mobile-nav-item">
          <a href="#">Our Centers</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#" onClick={() => toggleDropdown('programs')}>
            Our Programs<span className={`dropdown-icon ${dropdownStates.programs ? 'open' : ''} alt2`}></span>
          </a>
          {dropdownStates.programs && (
            <div className="dropdown-content">
              <Link to="/RoboCHAMPS" className="custom-link">
                <div className="items items2">
                  
                  <div className="drop-text drop-text2">RoboCHAMPS</div>
                </div>
              </Link>
              <Link to="/FinCHAMPS" className="custom-link">
                <div className="items items2">
                  
                  <div className="drop-text drop-text2">FinCHAMPS</div>
                </div>
              </Link>
              <Link to="/LingoCHAMPS" className="custom-link">
                <div className="items items2">
                  
                  <div className="drop-text drop-text2">LingoCHAMPS</div>
                </div>
              </Link>
              <Link to="/CodeCHAMPS" className="custom-link">
                <div className="items items2">
                  
                  <div className="drop-text drop-text2">CodeCHAMPS</div>
                </div>
              </Link>
            </div>
          )}
        </li>
        <li className="mobile-nav-item">
          <a href="#">Who We Are</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#">English</a>
        </li>
      </ul>
    </nav>
      <nav className={`navbar ${isFixed ? "animate__animated animate__fadeInDown animate__faster" : ""}`} style={navbarStyle}> 
      {isFixed && <div className="harvard2"></div>}
        <ul className={`nav-list ${isFixed ? "navStyle" : ""}`}>
        
          <li className={`nav-item dropdown ${isFixed ? "navDrop" : ""}`} ref={dropdownRefs.programs}>
            <span className="nav-link" onClick={() => toggleDropdown('programs')}>
              Our Programs
              <span className={`dropdown-icon ${dropdownStates.programs ? 'open' : ''}`}></span>
            </span>
            {dropdownStates.programs && (
              <div className="dropdown-content">
                {/* Content for the centers dropdown */}
                <Link to="/RoboCHAMPS" className="custom-link"><div className="items"><div className="bd1 bg"></div><div className="drop-text">RoboCHAMPS</div></div></Link>
                <Link to="/FinCHAMPS" className="custom-link"><div className="items"><div className="bd2 bg"></div><div className="drop-text">FinCHAMPS</div></div></Link>
                <Link to="/LingoCHAMPS" className="custom-link"><div className="items"><div className="bd3 bg"></div><div className="drop-text">LingoCHAMPS</div></div></Link>
                <Link to="/CodeCHAMPS" className="custom-link"><div className="items"><div className="bd4 bg"></div><div className="drop-text">CodeCHAMPS</div></div></Link>
              </div>
            )}
          </li>
          <li className={`nav-item dropdown ${isFixed ? "navDrop" : ""}`}>
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

          <li className={`nav-item dropdown ${isFixed ? "navDrop" : ""}`}>

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
          <li className={`nav-item dropdown ${isFixed ? "navDrop" : ""}`}>

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
