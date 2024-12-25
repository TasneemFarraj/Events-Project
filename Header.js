import React, { useState } from "react";
import "../../Style/Header.css";
import { Link } from "react-router";
import { TfiReddit,TfiCar,TfiMobile,TfiWorld } from "react-icons/tfi";


const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isCountryShown, setIsCountryShown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='nav'>
       <div className="logo">
        <img
          src="eventLogo.png" 
          alt="Logo"
          className="logo-img"
        />
        <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      </div>
      <ul className={`nav-items ${isMenuOpen ? "show" : ""}`}>
      <li className='nav-item dropdown'>
          <span
            className='nav-Link'
            onMouseEnter={() => setIsCountryShown(true)}
            onMouseLeave={() => setIsCountryShown(false)}
            onClick={() => setIsCountryShown(true)}
          >
            Country
            <span className='arrow' style={{ fontSize: "10px" }}>
              {isCountryShown ? "▲" : "▼"}
            </span>
            <nav className={`subCou ${isCountryShown ? "show" : ""}`}>
              <ul className='subCou-items'>
                <li className='subCou-item'>
                  <img
                    src='https://flagcdn.com/w20/ae.png'
                    alt='Dubai Flag'
                    className='flag-icon'
                  />
                  <Link className='subCou-Link'>Dubai</Link>
                </li>
                <li className='subCou-item'>
                  <img
                    src='https://flagcdn.com/w20/qa.png'
                    alt='Qatar Flag'
                    className='flag-icon'
                  />
                  <Link className='subCou-Link'>Qatar</Link>
                </li>
                <li className='subCou-item'>
                  <img
                    src='https://flagcdn.com/w20/us.png'
                    alt='USA Flag'
                    className='flag-icon'
                  />
                  <Link className='subCou-Link'>USA</Link>
                </li>

                <li className='subCou-item'>
                  <img
                    src='https://flagcdn.com/w20/cn.png'
                    alt='China Flag'
                    className='flag-icon'
                  />
                  <Link className='subCou-Link'>China</Link>
                </li>
              </ul>
            </nav>
          </span>
        </li>

        <li className='nav-item dropdown'>
          <span
            className='nav-Link'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => setIsShown(true)}
          >
            Event Type
            <span className='arrow' style={{ fontSize: "10px" }}>
              {isShown ? "▲" : "▼"}
            </span>
            <nav className={`submenu ${isShown ? "show" : ""}`}>
            <ul className="submenu-items">
                <li className="submenu-item">
                  <TfiWorld  size={18} style={{ marginRight: "10px" }} /> 
                  <Link className="submenu-Link">Technology</Link>
                </li>
                <li className="submenu-item">
                  <TfiMobile size={25} style={{ marginRight: "10px" }} /> 
                  <Link className="submenu-Link">Mobile Technology</Link>
                </li>
                <li className="submenu-item">
                  <TfiCar size={20} style={{ marginRight: "10px" }} /> 
                  <Link className="submenu-Link">Electric Car </Link>
                </li>
                <li className="submenu-item">
                  <TfiReddit  size={23} style={{ marginRight: "10px" }} /> 
                  <Link className="submenu-Link">AI</Link>
                </li>
              </ul>
            </nav>
          </span>
        </li>

        <li className='nav-item'>
          <Link className='nav-Link'>
            <span>Pricing</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-Link'>
            <span>Explore event</span>
          </Link>
        </li>

        <li className='nav-item dropdown'>
          <span
            className='nav-Link'
            onMouseEnter={() => setIsAbout(true)}
            onMouseLeave={() => setIsAbout(false)}
          >
            About us
            <span className='arrow'>
              {isAbout ? "▲" : "▼"}
            </span>
            <nav className={`subAbout ${isAbout ? "show" : ""}`}>
              <ul className='subAbout-items'>
                <li className='subAbout-item'>
                  <Link className='subAbout-Link'>Technology</Link>
                </li>
                <li className='subAbout-item'>
                  <Link className='subAbout-Link'>Mobile Technology</Link>
                </li>
                <li className='subAbout-item'>
                  <Link className='subAbout-Link'>Electric Car Event</Link>
                </li>
              </ul>
            </nav>
          </span>
        </li>
         <li>
        
         </li>
      </ul>
 <div className="login-btn-container">
        <button className="login-btn">Login</button>
          </div>
    </nav>
  );
};

export default Header;