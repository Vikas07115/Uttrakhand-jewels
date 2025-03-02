import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';  // For icons

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <h3>Contact Information</h3>
        <p>Email: info@uttarakhandjewels.com</p>
        <p>Phone: +91 XXXXX-XXXXX</p>
        <p>Address: Almora,Uttarakhand, India</p>
      </div>
      
      <div className="footer-social">
        <p>Follow us on:</p>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram size={30} />
        </a>
      </div>

      <div className="footer-credits">
        <p>Designed and Developed by <strong>Vikas Mehta</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
