import React from 'react';
import './App.css';

function About() {
  return (
    <div className="about-section">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            We are passionate about bringing the traditional craftsmanship of Uttarakhand to life. Our jewelry collections are inspired by the rich cultural heritage and unique artistry of the region. Each piece is handcrafted with love, attention to detail, and an effort to preserve the age-old traditions while offering contemporary designs.
            <br />
            <br />
            <strong>Our Mission:</strong> Our mission is to offer high-quality, handcrafted jewelry that celebrates the beauty of Uttarakhand. We aim to make these traditional pieces accessible to everyone, bringing the spirit of the hills to your wardrobe.
          </p>
        </div>
        <div className="about-image">
          <img src="mix.webp" alt="Uttarakhand Jewelry" />
        </div>
      </div>
    </div>
  );
}

export default About;
