import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', logo: 'https://img.icons8.com/color/48/000000/javascript.png' },
    { name: 'React', logo: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'Node.js', logo: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { name: 'CSS', logo: 'https://img.icons8.com/color/48/000000/css3.png' },
    { name: 'HTML', logo: 'https://img.icons8.com/color/48/000000/html-5.png' },
    { name: 'Python', logo: 'https://img.icons8.com/color/48/000000/python.png' },
    { name: 'Java', logo: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png' },
    { name: 'C++', logo: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' }
  ];

  return (
    <section id="skills" className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
