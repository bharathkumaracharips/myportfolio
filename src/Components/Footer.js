import React from 'react';
import './Footer.css'; // Include this if you want to style the footer
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
      <a href="https://www.linkedin.com/in/ps-bharath-kumar/" target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/bharathkumaracharips" target="_blank" rel="noopener noreferrer">
          <SiGithub className="social-icon" />
        </a>
        <a href="https://x.com/PsbharathK" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="social-icon" />
        </a>
        <a href="mailto:bharathkumaracharips@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className="social-icon" />
        </a>
      </div>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-info">
        <p>© 2024 Your Name. All Rights Reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>

      <div className="back-to-top">
        <a href="#top">Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;