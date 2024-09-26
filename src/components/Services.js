/* 
File Name: services.js
Student Name: Evelyn Kim 
Student ID: 301121049
Date: September 26, 2024 
*/
// src/components/Services.js
import React from 'react';
import './Services.css'; // Ensure you create this CSS file

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="service-list">
        <div className="service">
          <img src="serviceimg1.png" alt="Service 1" />
          <h2>Web Development - Commercial Product Website</h2>
          <p>
            Creating responsive, dynamic, and user-friendly websites using the latest web technologies 
            like HTML, CSS, JavaScript, and React.
          </p>
        </div>
        <div className="service">
          <img src="serviceimg2.png" alt="Service 2" />
          <h2>Mobile App Development</h2>
          <p>
            Building cross-platform mobile applications for iOS and Android using modern frameworks 
            like React Native, ensuring performance and functionality.
          </p>
        </div>
        <div className="service">
          <img src="serviceimg3.png" alt="Service 3" />
          <h2>AI and Machine Learning</h2>
          <p>
            Developing intelligent solutions using machine learning algorithms and AI technologies 
            for data analysis, automation, and prediction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
