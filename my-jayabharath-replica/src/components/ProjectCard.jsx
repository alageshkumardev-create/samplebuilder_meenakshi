import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from './EnquiryForm';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <img src={project.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'} alt={project.name} />
          <div className="project-badge">{project.status}</div>
        </div>
        <div className="project-content">
          <h3>{project.name}</h3>
          <p className="project-location">{project.location}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-features">
            <span className="feature">{project.bhk} BHK</span>
            {project.type && <span className="feature">{project.type}</span>}
          </div>
          <div className="project-actions">
            <Link to={`/project/${project.id}`} className="btn-primary">View Details</Link>
            <button className="btn-secondary" onClick={() => setShowEnquiryForm(true)}>Enquire Now</button>
          </div>
        </div>
      </div>
      {showEnquiryForm && (
        <EnquiryForm
          title={`Enquire About ${project.name}`}
          subtitle={project.location}
          projectId={project.id}
          onClose={() => setShowEnquiryForm(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;

