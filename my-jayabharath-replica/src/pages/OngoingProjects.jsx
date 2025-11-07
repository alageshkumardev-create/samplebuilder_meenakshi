import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './OngoingProjects.css';

const OngoingProjects = () => {
  const [searchParams] = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const location = searchParams.get('location');
    if (location) {
      setSelectedLocation(location);
    }
  }, [searchParams]);

  const projects = [
    {
      id: 1,
      name: 'Meenakshi Elite',
      location: 'Surya Nagar, Madurai',
      description: 'Premium apartments with modern amenities in the heart of Surya Nagar.',
      bhk: '2, 3',
      type: 'Apartments',
      status: 'Ongoing',
      city: 'madurai',
      area: 'surya-nagar',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'Meenakshi Twin Towers',
      location: 'Surya Nagar, Madurai',
      description: 'Luxury twin tower apartments with world-class facilities.',
      bhk: '2, 3, 4',
      type: 'Apartments',
      status: 'Ongoing',
      city: 'madurai',
      area: 'surya-nagar',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'Meenakshi Gardens',
      location: 'Oomachikulam, Madurai',
      description: 'Premium gated community with luxury villas and apartments.',
      bhk: '3, 4',
      type: 'Villas',
      status: 'Ongoing',
      city: 'madurai',
      area: 'oomachikulam',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      name: 'Meenakshi Towers',
      location: 'Oomachikulam, Madurai',
      description: 'Ultra-Luxury 1, 2 and 3 BHK Apartments with modern amenities.',
      bhk: '1, 2, 3',
      type: 'Apartments',
      status: 'Ongoing',
      city: 'madurai',
      area: 'oomachikulam',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      name: 'Meenakshi Green Valley',
      location: 'Avaniyapuram, Madurai',
      description: 'Premium villas in a gated community with lush green surroundings.',
      bhk: '3, 4, 5',
      type: 'Villas',
      status: 'Ongoing',
      city: 'madurai',
      area: 'avaniyapuram',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      name: 'Meenakshi Flora',
      location: 'Thuvariman, Madurai',
      description: 'Beautiful villas surrounded by nature with modern amenities.',
      bhk: '3, 4',
      type: 'Villas',
      status: 'Ongoing',
      city: 'madurai',
      area: 'thuvariman',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      name: 'Meenakshi River View',
      location: 'Thuvariman, Madurai',
      description: 'Luxury riverfront villas with stunning views and premium finishes.',
      bhk: '4, 5',
      type: 'Villas',
      status: 'Ongoing',
      city: 'madurai',
      area: 'thuvariman',
      image: 'https://images.unsplash.com/photo-1600585154526-990dbe4eb5f3?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      name: 'Meenakshi Residency',
      location: 'Saravanampatti, Coimbatore',
      description: 'Luxury gated community villas in the fast-growing IT hub.',
      bhk: '3, 4',
      type: 'Villas',
      status: 'Ongoing',
      city: 'coimbatore',
      area: 'saravanampatti',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const locationMatch = selectedLocation === 'all' || 
      project.city === selectedLocation || 
      project.area === selectedLocation;
    const typeMatch = selectedType === 'all' || project.type.toLowerCase() === selectedType;
    return locationMatch && typeMatch;
  });

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'madurai', label: 'Madurai' },
    { value: 'coimbatore', label: 'Coimbatore' },
    { value: 'surya-nagar', label: 'Surya Nagar' },
    { value: 'oomachikulam', label: 'Oomachikulam' },
    { value: 'avaniyapuram', label: 'Avaniyapuram' },
    { value: 'thuvariman', label: 'Thuvariman' },
    { value: 'saravanampatti', label: 'Saravanampatti' }
  ];

  const types = [
    { value: 'all', label: 'All Types' },
    { value: 'villas', label: 'Villas' },
    { value: 'apartments', label: 'Apartments' }
  ];

  return (
    <div className="ongoing-projects-page">
      <div className="page-header">
        <div className="container">
          <h1>Ongoing Projects</h1>
          <p>Explore Our Current Developments</p>
        </div>
      </div>

      <div className="container">
        <section className="projects-content">
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="location">Filter by Location:</label>
              <select 
                id="location" 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="type">Filter by Type:</label>
              <select 
                id="type" 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="no-results">
                <p>No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OngoingProjects;

