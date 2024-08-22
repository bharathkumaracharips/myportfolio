import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Internship from './Components/Internship';
import Certifications from './Components/Certifications';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Internship' element={<Internship/>}/>
            <Route path='/Certifications' element={<Certifications/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;