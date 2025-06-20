import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-wrapper text-light">
  <div className="container">

    <div className="footer-top">
      <div className="footer-logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul className="footer-links">
        <li><Link to='/about'>Who We Are</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/careers'>Careers</Link></li>
      </ul>

      <div className="social-icons">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-youtube"></i>
        <i className="bi bi-instagram"></i>
      </div>
    </div>

    <hr className="footer-divider" />

    <div className="footer-bottom">
      <small>Copyright © 2025 HSM All Rights Reserved. <span className="feedback">Feedback on web experience</span></small>
      <div className="region">
        <i className="bi bi-globe2"></i>
        <small>Other Regions / English</small>
      </div>
    </div>

  </div>
</footer>

  );
}

export default Footer;
