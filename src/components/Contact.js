import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h3>Contact</h3>
      <p>Feel free to connect with me!</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/SrinjayMitra" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Resume/CV</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
