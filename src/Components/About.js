import React from 'react';
import {Link} from 'react-router-dom'
import "./About.css"
const About = () => {
  return (
    <section id="about">
      <Link to ="/">Back</Link>
      <h2>About Me</h2>
      <p>I am a Computer Science and Engineering student at CUTM AP, specializing in Ethical Hacking and Blockchain Development. With a CGPA of 8.9 and experience working on projects like Block Stamp and Block Meet, I have honed my skills in developing secure, decentralized applications. My expertise extends to ethical hacking, where I focus on identifying and mitigating critical vulnerabilities. Currently interning at an IT company, I am continually expanding my knowledge and applying it in real-world scenarios. I am passionate about leveraging technology to solve complex challenges and am committed to continuous learning and growth in the field.</p>
      <h2>education</h2>
      <div className= "school">
      <p>Schooling</p>
      <img src="education/school_logo.png" alt="school_logo"/>
      <p>G.P.A : 9.0</p>
      </div>
      <div className="inter">
      <p>Intermediate</p>
      <img src ="education/inter_college_logo.jpeg" alt="inter_logo"/>
      <p>G.P.A : 7.98</p>
      </div>
      <div className='UG'>
      <p>Under Graduation</p>
      <img src="education/Centurion-University-AP-logo.webp" alt="UG_logo"/>
      <p>G.P.A : 8.9</p>
      </div>
      <h2>Intrests</h2>
      <p>I am very intrested to read technical books.
         And bug bounty programs, ethical hacking.
         Also intrested in emerging technologies like block chain technology.
      </p>
      <Link to="/Skills">Skills</Link>
    </section>
    
  );
};

export default About;