// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <img src="projectimg1.png" alt="Project 1" style={{ width: '400px', height: '300px' }} />
          <h2>Project 1: Web Design - Commercial Product Website</h2>
          <p>
            *Designed an interactive marketing website using JavaScript, HTML, and CSS<br />
            *Developed an attractive, responsive and user-oriented interface for ease of navigation
          </p>
        </div>
        <div className="project">
          <img src="projectimg2.png" alt="Project 2" style={{ width: '400px', height: '300px' }} />
          <h2>Project 2: Commercial Web Application Software Requirements Specification</h2>
          <p>
            *Developed a detailed software requirement specification by using both textual and graphical diagrams (UML
            Standards) for a fictitious web application,<br />
            gaining a solid understanding of technical documentation.
          </p>
        </div>
        <div className="project">
          <img src="projectimg3.png" alt="Project 3" style={{ width: '400px', height: '300px' }} />
          <h2>Project 3: E-commerce Database Design – Backend Project</h2>
          <p>
            *Built an e-commerce database with SQL Developer, including ERDs and a populated schema<br />
            *Executed SQL queries (DDL, DML) to manage data and implement features like product categorization and
            shopping cart operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
