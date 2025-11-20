import React from 'react';
import './Leadership.css';
 import headerBg from '../asset/MediaBG.jpeg'
          

const Leadership = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Leadership Member 1',
      position: 'Chief Executive Officer',
      description: 'Leading the company with strategic vision and operational excellence.'
    },
    {
      id: 2,
      name: 'Leadership Member 2',
      position: 'Chief Operating Officer',
      description: 'Ensuring smooth operations and maintaining quality standards across all projects.'
    },
    {
      id: 3,
      name: 'Leadership Member 3',
      position: 'Head of Construction',
      description: 'Overseeing construction activities with expertise in modern building techniques.'
    },
    {
      id: 4,
      name: 'Leadership Member 4',
      position: 'Head of Sales & Marketing',
      description: 'Driving growth and building strong customer relationships.'
    }
  ];

  return (
    <div className="leadership-page">
       <div className="services-header" style={{ backgroundImage: `url(${headerBg})` }}>
                      <div className="services-header-overlay"></div>
                     <div className="services-header-left">
          <h1>Leadership Team</h1>
          <p>Experienced Professionals Leading the Way</p>
        </div>
      </div>

      <div className="container">
        <section className="leadership-content">
          <div className="leadership-intro">
            <h2>Meet Our Leadership Team</h2>
            <p>
              Our leadership team brings together decades of combined experience in real estate, 
              construction, and business management. Each member brings unique expertise and a shared 
              commitment to excellence, making Happy Homes the best builders in Madurai.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
            <div className="team-image">
              <img 
                src={`https://i.pravatar.cc/400?img=${member.id}`} 
                alt={member.name}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=c49b3a&color=fff&bold=true`;
                }}
              />
            </div>
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Leadership;


