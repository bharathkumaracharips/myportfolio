import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMdHome } from "react-icons/io";
import { FaInfo, FaFilePdf, FaEnvelope } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <header>
        <img src="/profile.jpg" alt="" className="profile-image" />
        <div className="indicator">
          {activeSection ? `cd /${activeSection}` : 'Ps Bharath Kumar Achari'}
        </div>
        <nav>
          <ul>
            <li>
              <Link to="intro" smooth={true} duration={500} onSetActive={() => handleSetActive('intro')}>
                <IoMdHome /> Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onSetActive={() => handleSetActive('about')}>
                <FaInfo /> About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} onSetActive={() => handleSetActive('skills')}>
                <LuBrainCircuit /> Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} onSetActive={() => handleSetActive('projects')}>
                <GrProjects /> Projects
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500} onSetActive={() => handleSetActive('resume')}>
                <FaFilePdf /> Resume
              </Link>
            </li>
            <li>
              <Link to="internship" smooth={true} duration={500} onSetActive={() => handleSetActive('internship')}>
                <HiBuildingOffice /> Internship
              </Link>
            </li>
            <li>
              <Link to="certifications" smooth={true} duration={500} onSetActive={() => handleSetActive('certifications')}>
                <PiCertificateFill /> Certifications
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onSetActive={() => handleSetActive('contact')}>
                <FaEnvelope /> Contact
              </Link>
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