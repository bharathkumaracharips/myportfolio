import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Skills from "./Components/Skills"
import Internship from './Components/Internship';
import Certifications from './Components/Certifications';
import Footer from './Components/Footer';

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
            <h1>LOOKING FOR A BLOCKCHAIN DEVELOPER</h1>
            <h1>I am P S BHARATH KUMAR ACHARI Block chain developer </h1>
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills"><Skills/>
          </section>
          <section id="projects">
            <Projects />
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
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
