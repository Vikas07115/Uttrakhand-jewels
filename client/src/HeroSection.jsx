import React from "react";
import './App.css';

function HeroSection({ scrollToFeatured }) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Uttarakhand's Jewels</h1>
        <p>Your go-to place for amazing products!</p>
        <button className="shop-now-btn" onClick={scrollToFeatured}>Shop Now</button>
      </div>
    </div>
  );
}

export default HeroSection;
