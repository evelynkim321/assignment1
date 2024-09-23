// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <img src="project1-image.jpg" alt="Project 1" />
          <h2>Project 1</h2>
          <p>Short description of Project 1.</p>
        </div>
        <div className="project">
          <img src="project2-image.jpg" alt="Project 2" />
          <h2>Project 2</h2>
          <p>Short description of Project 2.</p>
        </div>
        <div className="project">
          <img src="project3-image.jpg" alt="Project 3" />
          <h2>Project 3</h2>
          <p>Short description of Project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
