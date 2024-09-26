/* 
File Name: Home.js
Student Name: Evelyn Kim 
Student ID: 301121049
Date: September 26, 2024 
*/
// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <img 
        src="/home.png" 
        alt="Home" 
        style={{ width: '55%', height: 'auto' }} 
      />
      <h1>Welcome to My Portfolio</h1>
      <p><b>My mission</b> is to leverage my passion for technology and commitment to continuous learning 
      to drive innovation and develop cutting-edge solutions in the field of artificial intelligence.</p>
      <a href="/about" className="btn">Learn More About Me</a>
    </div>
  );
};

export default Home;
