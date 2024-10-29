import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Software Systems',
      institution: 'Simon Fraser University ',
      year: '2023'
    },
    // Add more education as needed
  ];

  return (
    <section className="education">
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h4>{edu.degree}</h4>
            <p>{edu.institution} - {edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
