/* 
File Name: Projects.js
Student Name: Evelyn Kim 
Student ID: 301121049
Date: September 26, 2024 
*/
// src/components/Projects.js
import React from 'react';
import './Projects.css'; 

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <img src="projectimg1.png" alt="Project 1" />
          <h2>Project 1: Web Design - Commercial Product Website</h2>
          <p>
          <b>Role & Outcome</b>: I designed and developed an interactive, user-friendly marketing website using JavaScript, 
            HTML, and CSS. My role involved creating a responsive and visually appealing interface that optimized user 
            navigation, resulting in a smooth and engaging user experience.
          </p>
        </div>
        <div className="project">
          <img src="projectimg2.png" alt="Project 2" />
          <h2>Project 2: Commercial Web Application Software Requirements Specification</h2>
          <p>
          <b>Role & Outcome</b>: I authored a comprehensive Software Requirements Specification (SRS) for a 
            fictitious web application, utilizing both textual descriptions and UML diagrams. This project 
            enhanced my ability to produce clear technical documentation and gave me practical experience with SRS 
            standards.
          </p>
        </div>
        <div className="project">
          <img src="projectimg3.png" alt="Project 3" />
          <h2>Project 3: E-commerce Database Design - Backend Project</h2>
          <p>
           <b>Role & Outcome</b>: I designed and implemented an e-commerce database using SQL Developer, constructing 
            Entity-Relationship Diagrams (ERDs) and executing SQL queries to manage data. The outcome was a fully 
            operational database with features like product categorization and shopping cart functionalities, 
            providing a robust backend solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
