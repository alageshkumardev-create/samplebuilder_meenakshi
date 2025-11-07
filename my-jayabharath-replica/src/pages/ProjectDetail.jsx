import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  // In a real app, this would fetch from an API based on id
  const project = {
    id: id,
    name: 'Happy Elite City',
    location: 'Oomachikulam, Madurai',
    description: 'Ultra-Luxury 1, 2 and 3 BHK Apartments with modern amenities and premium finishes. Located in the prime area of Oomachikulam, this project offers the perfect blend of luxury and convenience.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    bhk: '1, 2, 3',
    type: 'Apartments',
    status: 'Ongoing',
    price: 'Starting from ₹XX Lakhs',
    area: 'Various sizes available',
    amenities: [
      'Swimming Pool',
      'Clubhouse',
      'Gymnasium',
      'Landscaped Gardens',
      '24/7 Security',
      'Power Backup',
      'Parking',
      'Elevator'
    ],
    specifications: [
      'Premium Quality Tiles',
      'Modular Kitchen',
      'Premium Sanitary Fittings',
      'Vitrified Flooring',
      'Wooden Doors',
      'Premium Paint'
    ]
  };

  return (
    <div className="project-detail-page">
      <div className="project-hero">
        <div className="container">
          <div className="project-hero-content">
            <h1>{project.name}</h1>
            <p className="project-location">{project.location}</p>
            <p className="project-status">{project.status}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-detail-content">
          <div className="project-main">
            <div className="project-image-gallery">
              <div className="main-image">
                <img src={project.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'} alt={project.name} />
              </div>
              <div className="image-thumbnails">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop" alt="Thumbnail 1" className="thumbnail" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop" alt="Thumbnail 2" className="thumbnail" />
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=200&fit=crop" alt="Thumbnail 3" className="thumbnail" />
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop" alt="Thumbnail 4" className="thumbnail" />
              </div>
            </div>

            <div className="project-description">
              <h2>About the Project</h2>
              <p>{project.description}</p>
            </div>

            <div className="project-specifications">
              <h2>Specifications</h2>
              <div className="specs-grid">
                {project.specifications.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <span className="check-icon">✓</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-amenities">
              <h2>Amenities</h2>
              <div className="amenities-grid">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span className="amenity-icon">🏢</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="project-sidebar">
            <div className="enquiry-box">
              <h3>Enquire About This Project</h3>
              <div className="project-info">
                <div className="info-item">
                  <span className="info-label">BHK:</span>
                  <span className="info-value">{project.bhk}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Type:</span>
                  <span className="info-value">{project.type}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price:</span>
                  <span className="info-value">{project.price}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area:</span>
                  <span className="info-value">{project.area}</span>
                </div>
              </div>
              <button 
                className="enquire-button"
                onClick={() => setShowEnquiryForm(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showEnquiryForm && (
        <EnquiryForm 
          title={`Enquire About ${project.name}`}
          subtitle={project.location}
          onClose={() => setShowEnquiryForm(false)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;

