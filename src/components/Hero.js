import React from 'react';
import './Hero.css';
import profilePic from '../images/pic.jpg'; // Update with your image path

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src={profilePic} alt="Srinjay Mitra" className="profile-pic" />
      <h2 className="headline">Hi, I'm Srinjay Mitra</h2>
      <p className="subheadline">Full-Stack Developer | Passionate about Web and Game Development</p>
      <p className="mission">I create digital experiences that blend creativity with functionality to bring your ideas to life.</p>
      <a href="#contact" className="contact-button">Get in Touch</a>
    </section>
  );
};

export default Hero;
