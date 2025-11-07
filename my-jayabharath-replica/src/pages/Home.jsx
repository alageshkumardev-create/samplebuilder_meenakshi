import React, { useState, useEffect } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      id: 'happy-elite-city',
      name: 'Happy Elite City',
      location: 'Oomachikulam, Madurai',
      description: 'Ultra-Luxury 1, 2 and 3 BHK Apartments with modern amenities and premium finishes.',
      bhk: '1, 2, 3',
      type: 'Apartments',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 'happy-green-valley',
      name: 'Happy Green Valley',
      location: 'Avaniyapuram, Madurai',
      description: 'Premium villas in a gated community with lush green surroundings and world-class facilities.',
      bhk: '3, 4, 5',
      type: 'Villas',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    },
    {
      id: 'happy-signature-residency',
      name: 'Happy Signature Residency',
      location: 'Saravanampatti, Coimbatore',
      description: 'Luxury gated community villas in the fast-growing IT hub with ultra-premium elevations.',
      bhk: '3, 4',
      type: 'Villas',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    }
  ];

  const carouselSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
      title: 'Ultra-Luxury Villas',
      caption: 'Crafted for families who aspire to elegant living in Madurai and Coimbatore.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
      title: 'Sky-High Apartments',
      caption: 'Panoramic city views with premium amenities and sustainable design.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&h=800&fit=crop',
      title: 'Gated Community Living',
      caption: 'Secure, green neighbourhoods with club-class comforts for every lifestyle.'
    }
  ];

  const slideCount = carouselSlides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideCount]);

  const goToPreviousSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slideCount) % slideCount);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slideCount);
  };

  const heroStats = [
    {
      id: 'experience',
      value: '32+',
      label: 'Years of Excellence'
    },
    {
      id: 'homes',
      value: '5000+',
      label: 'Happy Homes Delivered'
    },
    {
      id: 'cities',
      value: '2',
      label: 'Cities Served'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}
      >
        <div className="container hero-layout">
          <div className="hero-content">
            <span className="hero-badge">Since 1993</span>
            <h1>Happy Homes — Best Builders in Madurai</h1>
            <p className="hero-subtitle">
              With 32+ years of expertise and 5000+ homes delivered, Happy Homes is the trusted name for luxury villas
              and premium apartments across Madurai and Coimbatore.
            </p>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => setShowEnquiryForm(true)}>
                Enquire Now
              </button>
              <button className="secondary-button" onClick={() => setShowEnquiryForm(true)}>
                Download Brochure
              </button>
            </div>
            <div className="hero-stats">
              {heroStats.map(stat => (
                <div key={stat.id} className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-highlight">
              <h3>{carouselSlides[currentSlide].title}</h3>
              <p>{carouselSlides[currentSlide].caption}</p>
            </div>
          </div>

          <div className="hero-controls" aria-label="Happy Homes project highlights">
            <div className="carousel-dots" role="tablist" aria-label="Carousel slides">
              {carouselSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`View slide ${index + 1}: ${slide.title}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Best Builders in Madurai and Coimbatore for Premium Villas and Apartments</h2>
          <div className="about-content">
            <p>
              If you are looking for builders in Madurai who deliver outstanding quality and value, your search ends here. 
              Happy Homes, known as the best builders in Madurai, brings you exceptional living spaces crafted with 
              passion and precision. With decades of experience, we are among the top builders in Madurai, offering a wide 
              range of projects, including stunning villas in Madurai and elegant apartments in Madurai.
            </p>
            <p>
              At Happy Homes, every project is a symbol of trust and excellence. As leading builders in Madurai, 
              we ensure that each home is designed for comfort, luxury, and functionality. Whether you're looking for 
              spacious villas in Madurai for your family or modern apartments in Madurai close to the city's best locations, 
              Happy Homes has the perfect home for you.
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
          <h2>Why Choose Happy Homes?</h2>
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

