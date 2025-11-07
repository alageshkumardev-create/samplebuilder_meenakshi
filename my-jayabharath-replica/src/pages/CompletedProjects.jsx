import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './CompletedProjects.css';

const CompletedProjects = () => {
  const completedProjects = [
    {
      id: 101,
      name: 'Meenakshi Heights',
      location: 'Madurai',
      description: 'Successfully completed luxury residential project with modern amenities.',
      bhk: '3, 4',
      type: 'Villas',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    },
    {
      id: 102,
      name: 'Meenakshi Apartments',
      location: 'Madurai',
      description: 'Premium apartments delivered on time with excellent quality.',
      bhk: '2, 3',
      type: 'Apartments',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 103,
      name: 'Meenakshi Paradise',
      location: 'Coimbatore',
      description: 'Luxury gated community with world-class facilities.',
      bhk: '3, 4, 5',
      type: 'Villas',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1600585154526-990dbe4eb5f3?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="completed-projects-page">
      <div className="page-header">
        <div className="container">
          <h1>Completed Projects</h1>
          <p>Our Successfully Delivered Projects</p>
        </div>
      </div>

      <div className="container">
        <section className="projects-content">
          <div className="intro-text">
            <p>
              Over the years, Meenakshi Builders has successfully completed numerous projects, 
              delivering homes that exceed expectations. Each completed project stands as a 
              testament to our commitment to quality, timely delivery, and customer satisfaction.
            </p>
          </div>

          <div className="projects-grid">
            {completedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompletedProjects;

