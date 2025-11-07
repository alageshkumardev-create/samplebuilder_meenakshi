import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Madurai',
      project: 'Meenakshi Green Valley',
      rating: 5,
      text: 'Meenakshi Builders delivered exactly what they promised. The quality of construction is excellent, and the team was very professional throughout the process. We are extremely happy with our new home.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Madurai',
      project: 'Meenakshi Towers',
      rating: 5,
      text: 'Best builders in Madurai! The attention to detail and customer service is outstanding. Our apartment is beautiful and the amenities are world-class. Highly recommended!'
    },
    {
      id: 3,
      name: 'Vikram Reddy',
      location: 'Coimbatore',
      project: 'Meenakshi Residency',
      rating: 5,
      text: 'We purchased a villa in Coimbatore and the experience has been fantastic. The project was completed on time, and the quality exceeded our expectations. Thank you Meenakshi Builders!'
    },
    {
      id: 4,
      name: 'Anita Devi',
      location: 'Madurai',
      project: 'Meenakshi Heights',
      rating: 5,
      text: '32+ years of experience really shows in their work. The legal documentation was clear, construction quality is top-notch, and the location is perfect. Great investment!'
    },
    {
      id: 5,
      name: 'Suresh Iyer',
      location: 'Madurai',
      project: 'Meenakshi Gardens',
      rating: 5,
      text: 'The team at Meenakshi Builders is very responsive and professional. They kept us updated throughout the construction process. We are looking forward to moving into our new home!'
    },
    {
      id: 6,
      name: 'Deepa Nair',
      location: 'Coimbatore',
      project: 'Meenakshi Residency',
      rating: 5,
      text: 'Excellent builders with a great track record. The villa we purchased is exactly as shown, and the gated community is well-maintained. Very satisfied with our purchase.'
    }
  ];

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <div className="container">
          <h1>Testimonials</h1>
          <p>What Our Customers Say About Us</p>
        </div>
      </div>

      <div className="container">
        <section className="testimonials-content">
          <div className="testimonials-intro">
            <h2>Happy Homeowners</h2>
            <p>
              Our customers are our biggest advocates. Here's what they have to say about 
              their experience with Meenakshi Builders.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.project}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-stats">
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;

