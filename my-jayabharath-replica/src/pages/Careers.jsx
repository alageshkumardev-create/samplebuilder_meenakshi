import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Project Manager',
      department: 'Construction',
      location: 'Madurai',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Sales Executive',
      department: 'Sales & Marketing',
      location: 'Coimbatore',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Architect',
      department: 'Design',
      location: 'Madurai',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Site Engineer',
      department: 'Construction',
      location: 'Madurai',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Sales & Marketing',
      location: 'Madurai',
      type: 'Full-time'
    },
    {
      id: 6,
      title: 'Customer Relationship Manager',
      department: 'Customer Service',
      location: 'Coimbatore',
      type: 'Full-time'
    }
  ];

  return (
    <div className="careers-page">
      <div className="page-header">
        <div className="container">
          <h1>Careers</h1>
          <p>Join Our Team and Build the Future</p>
        </div>
      </div>

      <div className="container">
        <section className="careers-content">
          <div className="careers-intro">
            <h2>Why Work With Us?</h2>
            <p>
              At Happy Homes, we believe in nurturing talent and providing opportunities 
              for growth. Join us in building homes and creating lasting value for our customers. 
              We offer a dynamic work environment, competitive compensation, and opportunities 
              to work on exciting projects.
            </p>
          </div>

          <div className="benefits-section">
            <h2>Employee Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">💰</span>
                <h4>Competitive Salary</h4>
                <p>Attractive compensation packages</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🏥</span>
                <h4>Health Insurance</h4>
                <p>Comprehensive health coverage</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📚</span>
                <h4>Training & Development</h4>
                <p>Continuous learning opportunities</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎯</span>
                <h4>Career Growth</h4>
                <p>Clear career progression paths</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">⚖️</span>
                <h4>Work-Life Balance</h4>
                <p>Flexible work arrangements</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎉</span>
                <h4>Team Culture</h4>
                <p>Collaborative and supportive environment</p>
              </div>
            </div>
          </div>

          <div className="openings-section">
            <h2>Current Openings</h2>
            <div className="jobs-list">
              {jobOpenings.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-details">
                    <span className="job-dept">{job.department}</span>
                    <span className="job-location">📍 {job.location}</span>
                  </div>
                  <a href="/#" role="button" className="apply-btn">Apply Now</a>
                </div>
              ))}
            </div>
          </div>

          <div className="apply-section">
            <h2>Don't See a Role That Fits?</h2>
            <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <a href="/#" role="button" className="general-apply-btn">Submit General Application</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;


