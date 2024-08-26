import React from 'react';
import { LiaFileDownloadSolid } from "react-icons/lia";
import './Resume.css'; // Import the CSS file for styling

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h1 className="resume-title">My Resume</h1>
      <div className="pdf-container">
        <iframe 
          src="/PSBharathKumarAchariResume.pdf" 
          title="Resume PDF" 
          className="pdf-viewer"
          frameBorder="0"
        />
      </div>
      <a href="/PSBharathKumarAchariResume.pdf" download className="download-button">
        <LiaFileDownloadSolid className="download-icon" />
        Download
      </a>
    </section>
  );
};

export default Resume;