import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Internship from './Components/Internship';
import Certifications from './Components/Certifications';

const App = () => {

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2; // Adjust for middle of viewport
      let currentSection = '';

      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          currentSection = section.id;
        }
      });

      updateSliderPosition(currentSection);
      updateActiveNavLink(currentSection);
    };

    const updateSliderPosition = (currentSection) => {
      const sections = document.querySelectorAll('section');
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      let sectionPercent = 0;

      sections.forEach((section) => {
        if (section.id === currentSection) {
          const sectionHeight = section.offsetTop;
          sectionPercent = (sectionHeight / totalHeight) * 100;
        }
      });

      document.getElementById('slider-inner').style.width = `${sectionPercent}%`;
    };

    const updateActiveNavLink = (currentSection) => {
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <section id="intro" className="intro">
            <h1>LOOKING FOR A BLOCKCHAIN DEVELOPER AND ETHICAL HACKER</h1>
            <p>You are at the right place</p>
            <h1>I am P S BHARATH KUMAR ACHARI looking for an ETHICAL HACKER role and Blockchain developer</h1>
            <h1>Please click the button below to know more details</h1>
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="internship">
            <Internship />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
