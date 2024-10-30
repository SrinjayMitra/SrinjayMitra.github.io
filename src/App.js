import React from 'react';
import Header from './components/Header';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <ThreeScene/> */}
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Interests />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default App;
