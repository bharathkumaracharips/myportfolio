import React from 'react';
import { Link } from 'react-router-dom'
const Resume = () => {
  return (
    <section id="resume">
        <Link to="/">Back to Home</Link>
      <h1>My Resume</h1>
      <a href="/PSBharathKumarAchariResume.pdf" download>
        Download my resume
      </a>
      <iframe
        src="/PSBharathKumarAchariResume.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Resume"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href="/PSBharathKumarAchariResume.pdf">Download PDF</a>.
      </iframe>
    </section>
  );
};

export default Resume;