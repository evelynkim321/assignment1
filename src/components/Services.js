// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="project-list">
        <div className="services">
          <img src="serviceimg1.png" alt="Service 1" style={{ width: '450px', height: '300px' }} />
          <h2>Web Develpoment - Commercial Product Website</h2>
          <p>
            Creating responsive, dynamic, and user-friendly websites using the latest web technologies 
            like HTML, CSS, JavaScript, and React.
          </p>
        </div>
        <div className="services">
          <img src="serviceimg2.png" alt="Service 2" style={{ width: '450px', height: '300px' }} />
          <h2>Mobile App Development</h2>
          <p>
            Building cross-platform mobile applications for iOS and Android using modern frameworks 
            like React Native, ensuring performance and functionality.
          </p>
        </div>
        <div className="services">
          <img src="serviceimg3.png" alt="Service 3" style={{ width: '450px', height: '300px' }} />
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
