import React, { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const featuredProjects = [
    {
      id: 1,
      name: 'Meenakshi Towers',
      location: 'Oomachikulam, Madurai',
      description: 'Ultra-Luxury 1, 2 and 3 BHK Apartments with modern amenities and premium finishes.',
      bhk: '1, 2, 3',
      type: 'Apartments',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'Meenakshi Green Valley',
      location: 'Avaniyapuram, Madurai',
      description: 'Premium villas in a gated community with lush green surroundings and world-class facilities.',
      bhk: '3, 4, 5',
      type: 'Villas',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'Meenakshi Residency',
      location: 'Saravanampatti, Coimbatore',
      description: 'Luxury gated community villas in the fast-growing IT hub with ultra-premium elevations.',
      bhk: '3, 4',
      type: 'Villas',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Best Builders in Madurai - Meenakshi Builders Since 1993</h1>
          <p className="hero-subtitle">
            With 32+ years of expertise and 5000+ homes built, Meenakshi Builders stands as the best builders in Madurai, 
            delivering top-tier luxury villas in Madurai and premium properties in Madurai.
          </p>
          <button className="cta-button" onClick={() => setShowEnquiryForm(true)}>
            Enquire Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Best Builders in Madurai and Coimbatore for Premium Villas and Apartments</h2>
          <div className="about-content">
            <p>
              If you are looking for builders in Madurai who deliver outstanding quality and value, your search ends here. 
              Meenakshi Builders, known as the best builders in Madurai, brings you exceptional living spaces crafted with 
              passion and precision. With decades of experience, we are among the top builders in Madurai, offering a wide 
              range of projects, including stunning villas in Madurai and elegant apartments in Madurai.
            </p>
            <p>
              At Meenakshi Builders, every project is a symbol of trust and excellence. As leading builders in Madurai, 
              we ensure that each home is designed for comfort, luxury, and functionality. Whether you're looking for 
              spacious villas in Madurai for your family or modern apartments in Madurai close to the city's best locations, 
              Meenakshi Builders has the perfect home for you.
            </p>
            <p>
              Choosing the best builders in Madurai means choosing homes built with superior construction quality, clear 
              legal titles, and exceptional designs. Our apartments in Madurai come with modern amenities, beautiful landscapes, 
              and strategic locations that enhance your lifestyle. If you prefer independent living, our villas in Madurai 
              offer luxurious private spaces combined with contemporary architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Meenakshi Builders?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>32+ Years Experience</h3>
              <p>Three decades of excellence in construction and real estate development</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏠</div>
              <h3>5000+ Homes Built</h3>
              <p>Successfully delivered thousands of happy homes across Madurai and Coimbatore</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h3>RERA Approved</h3>
              <p>All projects are RERA approved with 100% legal clarity and UDS ownership</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Superior construction quality with top-class specifications and modern amenities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
      )}
    </div>
  );
};

export default Home;

