import React from 'react';
import './Hero.css';
import profilePic from '../images/pic.jpg'; // Update with your image path

const Hero = () => {
  return (
    <section className="hero">
      <img src={profilePic} alt="Eve Kayser" className="profile-pic" />
      <h2 className="headline">Agency-level web development services at freelancer rates</h2>
      <p className="mission">My mission is to design and develop a website that you and your audience love.</p>
      {/* <a href="https://wa.me/your-whatsapp-number" className="whatsapp-button">Happy to chat on Whatsapp</a> */}
    </section>
  );
};

export default Hero;
