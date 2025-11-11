import React, { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import './Contact.css';

const Contact = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [contactInfo] = useState({
    address: '123 Main Street, Madurai, Tamil Nadu 625001',
    phone: '+91 98765 4355210',
    email: 'hello@happyhomes.com',
    hours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
  });

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in Touch with Happy Homes</p>
        </div>
      </div>

      <div className="container">
        <section className="contact-content">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Visit Our Office</h2>
              <div className="contact-info-card">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href={`tel:${contactInfo.phone}`} role="button">{contactInfo.phone}</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p><a href={`mailto:${contactInfo.email}`} role="button">{contactInfo.email}</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <p>📍 Map Location</p>
                <p className="map-note">Interactive map will be displayed here</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p className="form-intro">Fill out the form below and we'll get back to you as soon as possible.</p>
              <button 
                className="enquire-button-large"
                onClick={() => setShowEnquiryForm(true)}
              >
                Open Enquiry Form
              </button>
            </div>
          </div>
        </section>
      </div>

      {showEnquiryForm && (
        <EnquiryForm 
          title="Contact Happy Homes"
          subtitle="We'd love to hear from you!"
          onClose={() => setShowEnquiryForm(false)}
        />
      )}
    </div>
  );
};

export default Contact;


