import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      link: 'https://github.com/user/project-one'
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      link: 'https://github.com/user/project-two'
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
