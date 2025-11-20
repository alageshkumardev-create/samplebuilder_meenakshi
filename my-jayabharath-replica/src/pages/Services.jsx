// import React from 'react';
// import './Services.css';

// const Services = () => {
//   const services = [
//     {
//       icon: '🏗️',
//       title: 'Residential Construction',
//       description: 'Building premium villas and apartments with modern architecture and superior quality materials.'
//     },
//     {
//       icon: '🏘️',
//       title: 'Gated Communities',
//       description: 'Developing secure gated communities with world-class amenities and facilities.'
//     },
//     {
//       icon: '📋',
//       title: 'Legal Documentation',
//       description: 'Ensuring 100% legal clarity with RERA approval and clear property titles.'
//     },
//     {
//       icon: '🏠',
//       title: 'Property Consultation',
//       description: 'Expert consultation services to help you find the perfect home for your needs.'
//     },
//     {
//       icon: '🔑',
//       title: 'Post-Sale Support',
//       description: 'Comprehensive after-sales service and support for all our homeowners.'
//     },
//     {
//       icon: '💰',
//       title: 'Investment Solutions',
//       description: 'Strategic investment opportunities with high returns and rental potential.'
//     }
//   ];

//   return (
//     <div className="services-page">
//       {/* <div className="page-header">
//         <div className="container">
//           <h1>Our Services</h1>
//           <p>Comprehensive Real Estate Solutions</p>
//         </div>
//       </div> */}
//        <div className="services-header-overlay"></div>
//       <div className="services-header">
//         <div className="services-header-left">
//           <h1>Our Services</h1>
//           <p>HOME / SERVICES</p>
//         </div>

//         <div className="services-header-right"></div>
//       </div>

//       <div className="container">
//         <section className="services-content">
//           <div className="services-intro">
//             <h2>What We Offer</h2>
//             <p>
//               Happy Homes provides end-to-end real estate solutions, from construction
//               to post-sale support. Our comprehensive services ensure a seamless experience
//               for our customers.
//             </p>
//           </div>

//           <div className="services-grid">
//             {services.map((service, index) => (
//               <div key={index} className="service-card">
//                 <div className="service-icon">{service.icon}</div>
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="service-features">
//             <h2>Why Choose Our Services?</h2>
//             <div className="features-list">
//               <div className="feature-item">
//                 <span className="check-icon">✓</span>
//                 <div>
//                   <h4>32+ Years Experience</h4>
//                   <p>Decades of expertise in real estate development</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="check-icon">✓</span>
//                 <div>
//                   <h4>RERA Approved</h4>
//                   <p>All projects comply with RERA regulations</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="check-icon">✓</span>
//                 <div>
//                   <h4>100% Legal Clarity</h4>
//                   <p>Transparent documentation and clear titles</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="check-icon">✓</span>
//                 <div>
//                   <h4>Timely Delivery</h4>
//                   <p>Projects completed on schedule</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="check-icon">✓</span>
//                 <div>
//                   <h4>Premium Quality</h4>
//                   <p>Superior construction and materials</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="check-icon">✓</span>
//                 <div>
//                   <h4>Customer Support</h4>
//                   <p>Dedicated support throughout the journey</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🛡️',
      title: 'DTCP Approved Projects',
      description: 'All our projects are fully DTCP approved ensuring complete legal safety and reliability.'
    },
    {
      icon: '📐',
      title: 'Plans',
      description: 'Professional building plans designed with precision and statutory compliance.'
    },
    {
      icon: '🏢',
      title: 'Elevation Designs',
      description: 'Modern and attractive elevation designs tailored to your style and budget.'
    },
    {
      icon: '🛋️',
      title: 'Interior Works',
      description: 'Complete interior design and execution for homes and commercial spaces.'
    },
    {
      icon: '🏗️',
      title: 'Strong & Durable Construction',
      description: 'Long-lasting construction using premium materials and best practices.'
    },
    {
      icon: '🧭',
      title: 'Best Vastu Guidance',
      description: 'Vastu-aligned planning to create positive living and working environments.'
    },
    {
      icon: '🛠️',
      title: 'Quality Workmanship',
      description: 'Skilled workforce ensuring superior finishes and reliable delivery.'
    },
    {
      icon: '🏦',
      title: 'Bank Loan Assistance',
      description: 'Assistance with housing loans and paperwork through our trusted partners.'
    },
    {
      icon: '🏠',
      title: 'Residential Construction',
      description: 'Building premium villas and apartments with modern architecture.'
    },
    {
      icon: '🏘️',
      title: 'Gated Communities',
      description: 'Secure gated communities with modern amenities and planned layouts.'
    },
    {
      icon: '📋',
      title: 'Legal Documentation',
      description: 'Transparent documentation and clear property titles (RERA/others).'
    },
    {
      icon: '🔑',
      title: 'Post-Sale Support',
      description: 'Comprehensive after-sales support and warranty services.'
    },
    {
      icon: '💰',
      title: 'Investment Solutions',
      description: 'Strategic real-estate investments with rental and capital appreciation focus.'
    }
  ];

  return (
    <div className="services-page">
      {/* Header with poster background */}
      <div className="services-header">
        <div className="services-header-overlay"></div>

        <div className="services-header-left">
          <h1>Our Services</h1>
          <p>HOME / SERVICES</p>
        </div>

        {/* optional right area - can place badge or image */}
        <div className="services-header-right" aria-hidden="true"></div>
      </div>

      <div className="container">
        <section className="services-content">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>
              Happy Homes provides end-to-end real estate solutions, from planning and construction
              to post-sale support. Our comprehensive services ensure a seamless experience
              for our customers.
            </p>
          </div>

          {/* Services grid: infographic-style cards */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card modern-card">
                {/* colored accent panel */}
                <div className={`card-accent color-${(index % 6) + 1}`}></div>

                {/* content */}
                <div className="service-card-inner">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                {/* circular number badge */}
                <div className={`card-number color-${(index % 6) + 1}`}>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="service-features">
            <h2>Why Choose Our Services?</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>32+ Years Experience</h4>
                  <p>Decades of expertise in real estate development</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>RERA Approved</h4>
                  <p>All projects comply with RERA regulations where applicable</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>100% Legal Clarity</h4>
                  <p>Transparent documentation and clear titles</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>Timely Delivery</h4>
                  <p>Projects completed on schedule</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>Premium Quality</h4>
                  <p>Superior construction and materials</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div>
                  <h4>Customer Support</h4>
                  <p>Dedicated support throughout the customer journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
