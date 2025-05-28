import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Profile />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
    </div>
  );
}

export default App;
