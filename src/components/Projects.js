import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A music player that reads the SD card of your device and displays the songs which you can play',
      link: 'https://github.com/SrinjayMitra/BinGama.git',
      logo: 'https://img.icons8.com/color/48/000000/music.png'
    },
    {
      title: 'Project Two',
      description: 'Just like YouTube, it plays a random video from the internet.',
      link: 'https://github.com/SrinjayMitra/Mediaplayer.git',
      logo: 'https://img.icons8.com/color/48/000000/youtube-play.png'
    },
    {
      title: 'Project Three',
      description: 'This is a quiz application that presents 15 cricket-related questions randomly and determines your score based on your intelligence quotient and the number of correct responses.',
      link: 'https://github.com/SrinjayMitra/CricketQuiz.git',
      logo: 'https://img.icons8.com/color/48/000000/cricket.png'
    },
    {
      title: 'Project Four',
      description: 'A board game info website of IAT 249',
      link: 'https://mafiawars.netlify.app/',
      logo: 'https://img.icons8.com/color/48/000000/board-game.png'
    },
  ];

  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              {project.title === 'Project Four' ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on Live Link</a>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
