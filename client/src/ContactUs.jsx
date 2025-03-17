import React, { useState } from 'react';
import './App.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-left">
        <img
          src="/chandeli haar.webp" 
          alt="Uttarakhand Jewelry"
          className="contact-us-image"
        />
      </div>

      <div className="contact-us-right">
        <h2>Contact Us</h2>

        {submitted ? (
          <div className="thank-you-message">
            <h3>Thank You for Reaching Out!</h3>
            <p>We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
