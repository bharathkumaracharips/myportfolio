import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <header>
      <img src="/profile.jpg" alt="Profile Picture" className="profile-image" />
        <div className="indicator">
          {activeSection ? `cd /${activeSection}` : 'Welcome'}
        </div>
        <nav>
          <ul>
            <li>
              <Link to="intro" smooth={true} duration={500} onSetActive={() => handleSetActive('intro')}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onSetActive={() => handleSetActive('about')}>About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} onSetActive={() => handleSetActive('projects')}>Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onSetActive={() => handleSetActive('contact')}>Contact</Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500} onSetActive={() => handleSetActive('resume')}>Resume</Link>
            </li>
            <li>
              <Link to="internship" smooth={true} duration={500} onSetActive={() => handleSetActive('internship')}>Internship</Link>
            </li>
            <li>
              <Link to="certifications" smooth={true} duration={500} onSetActive={() => handleSetActive('certifications')}>Certifications</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="slider">
        <div id="slider-inner" className="slider-inner"></div>
      </div>
    </>
  );
};

export default Header;