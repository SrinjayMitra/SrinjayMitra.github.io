import React from 'react';
import './Interests.css';

const Interests = () => {
  const interests = [
    'Traveling',
    'Reading',
    'Photography',
    'Coding',
    // Add more interests as needed
  ];

  return (
    <section className="interests">
      <h3>Interests</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
