import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Software Systems',
      institution: 'Simon Fraser University',
      year: '2023',
      logo: 'https://www.sfu.ca/etc/designs/clf/clientlibs/clf4/default/img/SFU@2x.png' // Path to your SFU logo
    },
    // Add more education as needed
  ];

  return (
    <section id="education" className="education">
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p>
              <img src={edu.logo} alt="SFU Logo" className="institution-logo" />
              {edu.institution} - {edu.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
