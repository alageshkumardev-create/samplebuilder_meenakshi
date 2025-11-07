import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Happy Homes</Link>
          <span className="tagline">No. 1 Builders in Madurai</span>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item dropdown" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
              <span className="dropdown-trigger">About Us <span className="arrow">▼</span></span>
              <ul className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`}>
                <li><Link to="/founder" onClick={() => setIsMenuOpen(false)}>Founder and MD</Link></li>
                <li><Link to="/leadership" onClick={() => setIsMenuOpen(false)}>Leadership Team</Link></li>
                <li><Link to="/completed-projects" onClick={() => setIsMenuOpen(false)}>Completed Projects</Link></li>
                <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Our Services</Link></li>
                <li><Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonial</Link></li>
                <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown" onMouseEnter={() => setIsProjectsOpen(true)} onMouseLeave={() => setIsProjectsOpen(false)}>
              <span className="dropdown-trigger">Ongoing Projects <span className="arrow">▼</span></span>
              <ul className={`dropdown-menu ${isProjectsOpen ? 'show' : ''}`}>
                <li className="sub-dropdown">
                  <span>Madurai</span>
                  <ul className="sub-dropdown-menu">
                    <li><Link to="/ongoing-projects?location=surya-nagar" onClick={() => setIsMenuOpen(false)}>Surya Nagar</Link></li>
                    <li><Link to="/ongoing-projects?location=oomachikulam" onClick={() => setIsMenuOpen(false)}>Oomachikulam</Link></li>
                    <li><Link to="/ongoing-projects?location=avaniyapuram" onClick={() => setIsMenuOpen(false)}>Avaniyapuram</Link></li>
                    <li><Link to="/ongoing-projects?location=thuvariman" onClick={() => setIsMenuOpen(false)}>Thuvariman</Link></li>
                  </ul>
                </li>
                <li className="sub-dropdown">
                  <span>Coimbatore</span>
                  <ul className="sub-dropdown-menu">
                    <li><Link to="/ongoing-projects?location=saravanampatti" onClick={() => setIsMenuOpen(false)}>Saravanampatti</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/media" onClick={() => setIsMenuOpen(false)}>Media</Link>
            </li>
            <li className="nav-item">
              <Link to="/investors" onClick={() => setIsMenuOpen(false)}>Investors</Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="enquire-btn" onClick={() => setIsMenuOpen(false)}>Enquire Now</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
