import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Happy Homes</h3>
            <p>Best Builders in Madurai Since 1993</p>
            <p>With 32+ years of expertise and 5000+ homes built, we stand as the best builders in Madurai.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ongoing-projects">Ongoing Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projects</h4>
            <ul>
              <li><Link to="/ongoing-projects?location=madurai">Madurai Projects</Link></li>
              <li><Link to="/ongoing-projects?location=coimbatore">Coimbatore Projects</Link></li>
              <li><Link to="/completed-projects">Completed Projects</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Customer Service</p>
            <p>Call Now | Mail Us</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section newsletter-section">
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Happy Homes Pvt Ltd @2024 All Rights Reserved</p>
          <p>Rank you Higher Madurai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

