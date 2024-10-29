import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'HTML',
    'Python',
    'java',
    'c++'
    // Add more skills as needed
  ];

  return (
    <section className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
