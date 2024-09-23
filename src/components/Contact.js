// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log(formData);
    // Redirect to Home page
    window.location.href = '/';
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
