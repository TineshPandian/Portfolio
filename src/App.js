import React from 'react';
import './App.css';
import 'typeface-poppins';
import ProfileBox from './components/Profile';
import Navbar from './components/Navbar';
import Intro from './components/Content';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div id='profile'>
      <ProfileBox />
      </div>
      <Navbar />
      <div id="home">
        <Intro />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;


