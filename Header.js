import React, { useState } from "react";
import "../Style/Header.css";
import { Link } from "react-router";
import { TfiReddit, TfiCar, TfiMobile, TfiWorld } from "react-icons/tfi";
import eventLogo from "./eventLogo.png";
const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isCountryShown, setIsCountryShown] = useState(false);
  const [isDropdownLocked, setIsDropdownLocked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = () => {
    if (!isDropdownLocked) {
      setIsCountryShown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isDropdownLocked) {
      setIsCountryShown(false);
    }
  };

  const handleClick = () => {
    setIsDropdownLocked(!isDropdownLocked); // للتبديل بين الإظهار والإخفاء عند النقر
    setIsCountryShown(!isDropdownLocked); // عرض القائمة عند النقر إذا كانت مخفية
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownLocked(false); // إخفاء القائمة بعد اختيار الدولة
    setIsCountryShown(false);
  };

  return (
    <nav className='nav'>
      <button className="navicon" onClick={toggleMenu}>
        ☰
      </button>
      <div className='logo'>
        <img src={eventLogo} alt='Logo' className='logo-img' />
      </div>

      <ul className={`nav-items ${isMenuOpen ? "show" : ""}`}>
        <li className='nav-item dropdown'>
          <span
            className='nav-Link'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            {selectedCountry}
            <span className='arrow' style={{ fontSize: "10px" }}>
              {isCountryShown ? "▲" : "▼"}
            </span>
          </span>
          <nav className={`subCou ${isCountryShown ? "show" : ""}`}>
            <ul className='subCou-items'>
              <li
                className='subCou-item'
                onClick={() => handleCountrySelect(<span>All Country</span>)}
              >
                <Link className='subCou-Link' style={{ fontSize: "14px" }}>
                  All Country
                </Link>
              </li>
              <li
                className='subCou-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/ae.png'
                        alt='Dubai Flag'
                        className='flag-icon'
                        style={{ marginRight: "8px" }} // إضافة تباعد بين العلم والنص
                      />
                      Dubai
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/ae.png'
                  alt='Dubai Flag'
                  className='flag-icon'
                />
                <Link className='subCou-Link'>Dubai</Link>
              </li>
              <li
                className='subCou-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/qa.png'
                        alt='Qatar Flag'
                        className='flag-icon'
                      />
                      Qatar
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/qa.png'
                  alt='Qatar Flag'
                  className='flag-icon'
                />
                <Link className='subCou-Link'>Qatar</Link>
              </li>
              <li
                className='subCou-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/us.png'
                        alt='USA Flag'
                        className='flag-icon'
                      />
                      USA
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/us.png'
                  alt='USA Flag'
                  className='flag-icon'
                />
                <Link className='subCou-Link'>USA</Link>
              </li>
              <li
                className='subCou-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/cn.png'
                        alt='China Flag'
                        className='flag-icon'
                      />
                      China
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/cn.png'
                  alt='China Flag'
                  className='flag-icon'
                />
                <Link className='subCou-Link'>China</Link>
              </li>
            </ul>
          </nav>
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
              <ul className='submenu-items'>
                <li className='submenu-item'>
                  <TfiWorld size={18} />
                  <Link className='submenu-Link'>Technology</Link>
                </li>
                <li className='submenu-item'>
                  <TfiMobile size={25} />
                  <Link className='submenu-Link' style={{ fontSize: "15px" }}>
                    Mobile Technology
                  </Link>
                </li>
                <li className='submenu-item'>
                  <TfiCar size={20} />
                  <Link className='submenu-Link'>Electric Car </Link>
                </li>
                <li className='submenu-item'>
                  <TfiReddit size={23} />
                  <Link className='submenu-Link'>AI</Link>
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
            <span className='arrow'>{isAbout ? "▲" : "▼"}</span>
            <nav className={`subAbout ${isAbout ? "show" : ""}`}>
              <div className='Aboutus'>
                <ul className='subAbout-items'>
                  <li className='subAbout-title'>
                    <strong style={{ color: "black" }}>Learn more</strong>
                  </li>
                  <li className='subAbout-item'>
                    <Link className='subAbout-Link'>
                      About us
                      <p>
                        Creating powerful experiences for the people you bring
                        together
                      </p>
                    </Link>
                  </li>
                  <li className='subAbout-item' style={{ color: "black" }}>
                    <Link className='subAbout-Link'>
                      Our Mission & Culture
                      <p>Learn what innovatex's culture stands for.</p>
                    </Link>
                  </li>
                  <li className='subAbout-item'>
                    <Link className='subAbout-Link'>
                      Partners
                      <p>Let's bring people together ... together!</p>
                    </Link>
                  </li>
                  <li className='subAbout-item'>
                    <Link className='subAbout-Link'>
                      Careers
                      <p>Come work somewhere that doesn't feel so work-y!</p>
                    </Link>
                  </li>
                </ul>
                <div className='Aboutus-img-learnmore'>
                  <img
                    width={200}
                    height={150}
                    src='About.jpg'
                    alt='Aboutus-img'
                    className='Aboutus-img'
                  />
                  <div style={{ color: "black" }}>
                    <strong>Bringing People Together</strong>
                    <p>
                      CEO Chris Sykes on how Swoogo's people-focused culture is
                      the driving force behind its continued growth.
                    </p>
                    <Link className='learn-more'>Learn more →</Link>
                  </div>
                </div>
              </div>
            </nav>
          </span>
        </li>
      </ul>
      <div className='login-btn-container'>
        <button className='login-btn'>Login</button>
      </div>
    </nav>
  );
};

export default Header;
