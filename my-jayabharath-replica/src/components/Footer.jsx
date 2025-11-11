import React from 'react';
// import { Link } from 'react-router-dom';
// import { footerPrimaryLinks, informationLinkGroups } from '../data/linkGroups';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-top-content">
          <div className="footer-brand">
            <h3>Happy Homes</h3>
            <p>Best Builders in Madurai &amp; Coimbatore since 1993</p>
            <p>32+ years of expertise · 5000+ homes delivered · RERA Approved</p>
          </div>
          {/* <div className="footer-primary-links">
            {footerPrimaryLinks.map(link => (
              <Link key={link} to="/" className="footer-primary-link">
                {link}
              </Link>
            ))}
          </div> */}
          <div className="footer-contact">
            <span className="footer-contact-label">Customer Service</span>
            <a href="tel:" role="button">Call Now</a>
            <a href="mailto:" role="button">Mail Us</a>
          </div>
        </div>
      </div>

      {/* <div className="footer-links">
        <div className="container footer-links-grid">
          {informationLinkGroups.map(group => (
            <div key={group.id} className="footer-column">
              <h4>{group.title}</h4>
              <ul>
                {group.items.map(item => (
                  <li key={item}>
                    <Link to="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>Happy Homes Pvt Ltd @2024 All Rights Reserved</p>
          <p>Rank you Higher Madurai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

