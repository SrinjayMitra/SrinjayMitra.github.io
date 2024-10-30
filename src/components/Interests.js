import React from 'react';
import './Interests.css';

const Interests = () => {
  const interests = [
    {
      name: 'Traveling',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      altImage: 'https://via.placeholder.com/150?text=Traveling+image+not+found'
    },
    {
      name: 'Reading',
      image: 'https://images.pexels.com/photos/2564617/pexels-photo-2564617.jpeg',
      altImage: 'https://via.placeholder.com/150?text=Reading+image+not+found'
    },
    {
      name: 'Photography',
      image: 'https://images.pexels.com/photos/1799823/pexels-photo-1799823.jpeg',
      altImage: 'https://via.placeholder.com/150?text=Photography+image+not+found'
    },
    {
      name: 'Coding',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      altImage: 'https://via.placeholder.com/150?text=Coding+image+not+found'
    }
  ];

  const handleImageError = (e, altImage) => {
    // Replace the image source with the specified alternative image
    e.target.src = altImage;
  };

  return (
    <section id="interests" className="interests">
      <h3>Interests</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index} className="interest-item">
            <img
              src={interest.image}
              alt={interest.name}
              className="interest-image"
              onError={(e) => handleImageError(e, interest.altImage)} // Handle image load error
            />
            <span>{interest.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
