import React from 'react';
import { BrowserRouter as Router, Route, Routes,  Link} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Internship from './Components/Internship';
import Certifications from './Components/Certifications';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus, SiSolidity } from 'react-icons/si';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Link to="/">Back</Link>
        <section className="intro">
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi! I am currently in my 7th semester and will be graduating in 2025. 
              I specialize in Ethical Hacking and Blockchain Development. I am actively seeking opportunities where I can apply my skills and contribute to exciting projects. 
              I am open to roles like Ethical Hacker and Blockchain Developer. Let's connect!
            </p>
            <Link to="/contact">
            <button className="hire-me-button">Hire Me</button>
            </Link>
            <h1>Have A Look At my Projects</h1>
            <Link to="/Projects">
            <button className="project-button">Visit My Works</button>
            </Link>
            <h1>View my Certifications</h1>
            <Link to="/Certifications">
            <button className='certificate-button'>Certification</button>
            </Link>
            <h1>My Skill Levels</h1>
            <div>
      <h1>Programming Languages</h1>
      <div className='Programm_icons'>
        <div className="icon_with_progress">
          <SiC title="C" />
          <div className="progress_bar"><div className="progress" style={{width: '70%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <SiCplusplus title="C++" />
          <div className="progress_bar"><div className="progress" style={{width: '80%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <FaJava title="Java" />
          <div className="progress_bar"><div className="progress" style={{width: '90%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <FaHtml5 title="HTML" />
          <div className="progress_bar"><div className="progress" style={{width: '95%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <FaCss3Alt title="CSS" />
          <div className="progress_bar"><div className="progress" style={{width: '85%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <FaReact title="React" />
          <div className="progress_bar"><div className="progress" style={{width: '75%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <SiSolidity title="Solidity" />
          <div className="progress_bar"><div className="progress" style={{width: '65%'}}></div></div>
        </div>
        <div className="icon_with_progress">
          <FaNodeJs title="Node.js" />
          <div className="progress_bar"><div className="progress" style={{width: '80%'}}></div></div>
        </div>
        </div>
        </div>
        <h1>My Works</h1>
        <Link to="/Internship">
        <button className="Internship-button">My Works</button>
        </Link>
        <h1>Download My Resume</h1>
        <Link to="/resume">
        <button className='resume-button'>Download</button>
        </Link>
        </section>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path='/Internship' element={<Internship/>}/>
            <Route path='/Certifications' element={<Certifications/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;