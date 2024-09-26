/* 
File Name: Contact.js
Student Name: Evelyn Kim 
Student ID: 301121049
Date: September 26, 2024 
*/
// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Assuming Contact.css is already created and working

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Capture user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate form submission and redirect to the home page
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the user's input in the popup
    alert(`
      Thank you for your message! Here's what you submitted:
      Name: ${formData.firstName} ${formData.lastName}
      Contact Number: ${formData.contactNumber}
      Email: ${formData.email}
      Message: ${formData.message}
    `);

    // Redirect to Home page
    window.location.href = '/';
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>

      {/* Contact Information Panel */}
      <div className="contact-info">
        <p><strong>Name:</strong> Evelyn Kim</p>
        <p><strong>Email:</strong> <a href="mailto:hkim321@my.centennialcollege.ca">hkim321@my.centennialcollege.ca</a></p>
        <p><strong>Phone:</strong> 123-456-7890</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
