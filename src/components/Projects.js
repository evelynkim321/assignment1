// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <img src="project1-image.jpg" alt="Project 1" />
          <h2>Project 1: Web Design - Commercial Product Website</h2>
          <p>*Designed an interactive marketing website using JavaScript, HTML, and CSS<br></br>
          *Developed an attractive, responsive and user-oriented interface for ease of navigation </p>
        </div>
        <div className="project">
          <img src="project2-image.jpg" alt="Project 2" />
          <h2>Project 2:Commercial Web Application Software Requirements Specification </h2>
          <p>*Developed a detailed software requirement specification by using both textual and graphical diagrams (UML
            Standards) for a fictitious web application,<br></br> gaining a solid understanding of technical documentation.</p>
        </div>
        <div className="project">
          <img src="project3-image.jpg" alt="Project 3" />
          <h2>Project 3: E-commerce Database Design – Backend Project</h2>
          <p>*Built an e-commerce database with SQL Developer, including ERDs and a populated schema<br></br>
            *Executed SQL queries (DDL, DML) to manage data and implement features like product categorization and
            shopping cart operations</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
