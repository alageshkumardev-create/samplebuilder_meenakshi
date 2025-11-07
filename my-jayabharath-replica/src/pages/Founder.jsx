import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <div className="founder-page">
      <div className="page-header">
        <div className="container">
          <h1>Founder and Managing Director</h1>
          <p>Visionary Leadership Since 1993</p>
        </div>
      </div>

      <div className="container">
        <section className="founder-content">
          <div className="founder-profile">
            <div className="founder-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Founder" className="founder-photo" />
            </div>
            <div className="founder-details">
              <h2>Our Founder</h2>
              <p className="founder-name">[Founder Name]</p>
              <p className="founder-title">Founder & Managing Director</p>
              <div className="founder-bio">
                <p>
                  With a vision to transform the real estate landscape in Madurai, our founder established 
                  Meenakshi Builders in 1993. What started as a small venture has grown into one of the most 
                  trusted names in the construction industry, with over 5000 homes delivered across Madurai 
                  and Coimbatore.
                </p>
                <p>
                  Under the founder's leadership, Meenakshi Builders has consistently maintained the highest 
                  standards of quality, integrity, and customer satisfaction. The company's commitment to 
                  excellence and innovation has made it the best builders in Madurai.
                </p>
                <p>
                  The founder's philosophy of "building homes, not just houses" has been the cornerstone of 
                  our success. Every project reflects this vision, combining modern architecture with 
                  traditional values, ensuring that each home is a perfect blend of luxury, comfort, and 
                  functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h2>Key Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <h3>32+ Years</h3>
                <p>Of Excellence in Real Estate</p>
              </div>
              <div className="achievement-item">
                <h3>5000+ Homes</h3>
                <p>Successfully Delivered</p>
              </div>
              <div className="achievement-item">
                <h3>No. 1 Builder</h3>
                <p>In Madurai</p>
              </div>
              <div className="achievement-item">
                <h3>100% Legal</h3>
                <p>All Projects RERA Approved</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Founder;

