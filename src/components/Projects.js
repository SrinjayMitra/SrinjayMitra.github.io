import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <ul>
        <li>
          <strong>Project Title</strong>: Brief description. <a href="https://github.com/your-repo">GitHub Link</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
};

export default Projects;
