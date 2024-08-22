import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <img src="/profile.jpg" alt="Profile" />
      <h1>P S BHARATH KUMAR ACHARI</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/Internship">Internship</Link>
        <Link to="/Certifications">Certifications</Link>
      </nav>
    </header>
  );
};

export default Header;