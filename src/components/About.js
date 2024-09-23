// src/components/About.js
import React from 'react';
import aboutMeImage from './aboutme.JPG'; 


const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img 
        src={aboutMeImage} 
        alt="Evelyn Kim" 
        style={{ width: '150px', height: 'auto' }} // Adjust width as needed
      />
      <p>Hello! I am Evelyn Kim. I'm a second-year student at Centennial College,
        majoring in Software Engineering Technology with a focus on Artificial 
        Intelligence. My background in finance, coupled with my experience working 
        at a bank, has given me a solid grasp of financial systems and operations. 
        Currently, I'm developing skills in programming, machine learning, and data 
        analysis. I'm passionate about leveraging AI to enhance financial services 
        and systems. I'm excited about opportunities that allow me to integrate my 
        financial knowledge with my technical expertise, making me a strong fit for 
        roles in financial institutions aiming to innovate with advanced technology.</p>
      <a href="/Evelyn_resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
    </div>
  );
};

export default About;
