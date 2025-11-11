import React, { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import ProjectCardcomp from '../components/ProjectCard';
import './Home.css';
import { FaHome } from "react-icons/fa";
import DropdownAccordion from "../components/Accordion";
import CountUp from "react-countup";



const heroBackground =
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&fit=crop';

const heroStats = [
  { id: 'experience', value: '32+', label: 'Years of Excellence' },
  { id: 'homes', value: '5000+', label: 'Happy Homes Delivered' },
  { id: 'cities', value: '2', label: 'Cities Served' }
];

const overviewContent = [
  {
    id: 'madurai-overview',
    heading: 'Best Builders in Madurai for Dream Villas',
    paragraphs: [
      'With 32+ years of expertise and 5000+ homes built, Happy Homes stands as the most trusted builder in Madurai. Every villa and apartment is crafted with meticulous attention to detail, superior engineering, and timeless design.',
      'From independent villas to high-rise apartments, we offer homes that match every lifestyle. Each community is thoughtfully planned with landscaped avenues, premium amenities, and exceptional connectivity to Madurai’s key destinations.'
    ]
  },
  {
    id: 'coimbatore-overview',
    heading: 'Top Builders in Coimbatore for Luxury Villas',
    paragraphs: [
      'In Coimbatore, we focus on ultra-premium gated villas located in the fast-growing Saravanampatti corridor. Our projects feature expansive floor plans, contemporary facades, and resort-style amenities tailored for modern families.',
      'Every development is RERA and OC approved with complete legal clarity, ensuring peace of mind and long-term value for both homeowners and investors.'
    ]
  }
];

const featuredProjects = [
  {
    id: 'happy-elite-city',
    name: 'Happy Elite City',
    location: 'Oomachikulam, Madurai',
    description:
      'Ultra-luxury 1, 2 & 3 BHK apartments with premium amenities, skylounge, and panoramic city views.',
    bhk: '1, 2, 3 BHK',
    type: 'Apartments',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop'
  },
  {
    id: 'happy-green-valley',
    name: 'Happy Green Valley',
    location: 'Avaniyapuram, Madurai',
    description:
      'Premium villas in a lush, gated community featuring club-class amenities and smart home automation.',
    bhk: '3, 4, 5 BHK',
    type: 'Villas',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop'
  },
  {
    id: 'happy-signature-residency',
    name: 'Happy Signature Residency',
    location: 'Saravanampatti, Coimbatore',
    description:
      'Gated community villas in the IT corridor with ultra-premium elevations and landscaped avenues.',
    bhk: '3, 4 BHK',
    type: 'Villas',
    status: 'Pre-Launch',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop'
  }
];

const brochurePrompts = [
  {
    id: 'brochure-main',
    title: 'Get Your Brochure Now!',
    subtitle: 'Download Instantly!'
  },
  {
    id: 'happy-elite-city',
    title: 'Happy Elite City',
    subtitle: 'Ultra-Luxury 1, 2 and 3 BHK Apartments!'
  },
  {
    id: 'happy-homes-villas',
    title: 'Happy Homes Villas',
    subtitle: 'Signature luxury villas & gated communities!'
  }
];

const keywordGroups = [
  {
    id: 'madurai-locations',
    title: 'Location-Specific Villas in Madurai',
    items: [
      'Villas in Surya Nagar',
      'Villas in Thuvariman',
      'Villas in Avaniyapuram',
      'Villas in Oomachikulam',
      'Villas in Kochadai',
      'Gated Community Villas Madurai'
    ]
  },
  {
    id: 'madurai-ready',
    title: 'Ready to Move Homes in Madurai',
    items: [
      'Ready to Move Villas Madurai',
      'Ready to Move Apartments Madurai',
      'Immediate Possession Villas Madurai',
      'Quick Possession Homes Madurai',
      'Big Villas Madurai',
      'New Ready Homes Madurai'
    ]
  },
  {
    id: 'madurai-luxury',
    title: 'Luxury & Premium Properties in Madurai',
    items: [
      'Luxury Villas Madurai',
      'Luxury Apartments Madurai',
      'Premium Villas Madurai',
      'Luxury Gated Communities Madurai',
      'Top Luxury Properties Madurai',
      'Exclusive Villas Madurai'
    ]
  },
  {
    id: 'coimbatore-builders',
    title: 'Builders in Coimbatore',
    items: [
      'Best Builders in Coimbatore',
      'Luxury Villa Builders Coimbatore',
      'Villa Builders in Coimbatore',
      'Gated Community Villa Builders',
      'Trusted Builders in Coimbatore',
      'Affordable Builders in Coimbatore'
    ]
  },
  {
    id: 'coimbatore-villas',
    title: 'Villas in Coimbatore',
    items: [
      '4 BHK Villas in Coimbatore',
      '5 BHK Villas in Coimbatore',
      'Independent Villas Coimbatore',
      'Ready-to-move Villas Coimbatore',
      'Gated Villas Coimbatore',
      'Villas Near Saravanampatti'
    ]
  },
  {
    id: 'coimbatore-ready',
    title: 'Ready-to-Move Villas in Coimbatore',
    items: [
      'Instant Possession Villas Coimbatore',
      'Ready Villas for Sale Coimbatore',
      'Ready-to-Move Luxury Villas',
      'Ready Gated Community Villas',
      'Quick Possession Villas',
      'Ready Villa Projects Coimbatore'
    ]
  }
];

const dropdownTextcontent = {
  heading: "Best Builders in Madurai and Coimbatore for Premium Villas and Apartments",
  text:"If you are looking for builders in Madurai who deliver outstanding quality and value, your search ends here. Happy Homes Homes, known as the best builders in Madurai, brings you exceptional living spaces crafted with passion and precision. With decades of experience, we are among the top builders in Madurai, offering a wide range of projects, including stunning villas in Madurai and elegant apartments in Madurai. At Happy Homes Homes, every project is a symbol of trust and excellence. As leading builders in Madurai, we ensure that each home is designed for comfort, luxury, and functionality. Whether you’re looking for spacious villas in Madurai for your family or modern apartments in Madurai close to the city’s best locations, Happy Homes Homes has the perfect home for you.Choosing the best builders in Madurai means choosing homes built with superior construction quality, clear legal titles, and exceptional designs. Our apartments in Madurai come with modern amenities, beautiful landscapes, and strategic locations that enhance your lifestyle. If you prefer independent living, our villas in Madurai offer luxurious private spaces combined with contemporary architecture.Happy Homes Homes has earned its reputation as one of the top builders in Madurai through a consistent focus on customer satisfaction, innovative designs, and on-time project delivery. Every villa and apartment we build reflects our commitment to quality. We are proud to be recognized as the best builders in Madurai by hundreds of happy homeowners who trusted us with their dream homes.When it comes to villas in Madurai, Happy Homes Homes offers a variety of options ranging from budget-friendly gated communities to luxurious independent villas. Our apartments in Madurai are designed for modern living with spacious layouts, natural lighting, and world-class facilities. Whether you are buying your first home, upgrading, or investing, Happy Homes Homes has a solution that fits your needs perfectly.The demand for villas in Madurai and apartments in Madurai is growing rapidly, and Happy Homes Homes continues to lead the way by developing high-quality residential projects that match evolving customer expectations. Being among the top builders in Madurai, we combine innovation, quality, and affordability to create homes that families cherish for generations.Trust only the best builders in Madurai for your dream property. Trust Happy Homes Homes, the name synonymous with excellence, reliability, and quality construction. Explore our wide range of villas in Madurai and apartments in Madurai today and make the smart choice for your future.With prime locations, superior amenities, and excellent value for money, Happy Homes Homes stands tall among the builders in Madurai. Experience the difference of working with the top builders in Madurai and let us help you find a home where memories are made.Top Builders in Coimbatore for Luxury Villas and Gated CommunitiesWhen you are searching for the most trusted builders in Coimbatore, Happy Homes Homes is the first name that comes to mind. As one of the top builders in Coimbatore, we specialize in crafting premium luxury villas in Coimbatore and exclusive new gated community villas in Coimbatore. Our commitment to quality, innovation, and customer satisfaction has made us one of the best builders in Coimbatore.Happy Homes Homes proudly stands among the builders in Coimbatore who focus on creating homes that reflect luxury, comfort, and modern living. Our luxury villas in Coimbatore are located in the prime area of Saravanampatti, the fast-growing IT and residential hub. Whether you’re looking for new gated community villas in Coimbatore or ultra-luxury individual villas, we offer the perfect options for your dream home.Recognized as the best builders in Coimbatore, Happy Homes Homes ensures that every villa is designed with careful attention to detail. Our luxury villas in Coimbatore feature ultra-premium elevations, high carpet areas, and top-class specifications that set new standards in the city. As one of the top builders in Coimbatore, we understand the importance of location, design, and amenities when it comes to premium living.If you are planning to invest in new gated community villas in Coimbatore, Happy Homes Homes offers the ideal opportunity. Our projects are OC and RERA approved, with 100% legal clarity and UDS ownership. With limited units and high exclusivity, our gated community villas provide excellent value for homeowners and investors alike. No wonder we are counted among the best builders in Coimbatore today.Happy Homes Homes, known as one of the most reliable builders in Coimbatore, combines architectural brilliance with strong engineering to deliver homes that exceed expectations. Our luxury villas in Coimbatore come with high rental demand potential, especially for NRIs and IT professionals working in Saravanampatti. For buyers seeking secure investments and exceptional living spaces, our new gated community villas in Coimbatore are a smart choice.As the top builders in Coimbatore, we emphasize building not just houses but communities that promote healthy and vibrant living. From landscaped gardens to spacious layouts and premium finishes, every feature in our luxury villas in Coimbatore is thoughtfully designed. Trust only the best builders in Coimbatore for a home that matches your aspirations.With multiple successful projects, Happy Homes Homes stands proud as one of the best builders in Coimbatore. We continue to deliver high-quality residential spaces that redefine luxury living. Whether you are a first-time homebuyer, an NRI, or an investor, our new gated community villas in Coimbatore and luxury villas in Coimbatore offer unbeatable value.When you think of builders in Coimbatore, think Happy Homes Homes — the best builders in Coimbatore for delivering trust, quality, and excellence. Explore our luxury villas in Coimbatore today and make your dream of owning a premium home in Saravanampatti a reality. Choose Happy Homes Homes, one of the top builders in Coimbatore, for your future."
}

  const counters = [
    { title: "Years Experience", value: 32, suffix: "+" },
    { title: "Dedicated Staff", value: 85, suffix: "+" },
    { title: "Skilled Laborers", value: 1500, suffix: "+" },
    { title: "Happy Clients", value: 4500, suffix: "+" },
  ];


const maduraiProjects = [
  {
    id: 1,
    name: "Jayabharath Flora",
    location: "Thuvairiman",
    bhk: "2 BHK, 3 BHK & 4 BHK",
    image: "/images/flora.jpg",
  },
  {
    id: 2,
    name: "Jayabharath Elite City",
    location: "Surya Nagar",
    bhk: "2 BHK, 3 BHK, 4 BHK & 5 BHK",
    image: "/images/elitecity.jpg",
  },
  {
    id: 3,
    name: "Jayabharath Oscar City",
    location: "Umachikulam",
    bhk: "1 BHK, 2 BHK, 3 BHK, 4 BHK & 5 BHK",
    image: "/images/oscarcity.jpg",
  },
];

const coimbatoreProjects = [
  {
    id: 4,
    name: "Jayabharath Twin Tower",
    location: "Surya Nagar",
    bhk: "1 BHK, 2 BHK, 3 BHK Apartments",
    image: "/images/twintower.jpg",
  },
  {
    id: 5,
    name: "Jayabharath Green City",
    location: "Avaniyapuram",
    bhk: "2 BHK & 3 BHK",
    image: "/images/greencity.jpg",
  },
  {
    id: 6,
    name: "Jayabharath River City",
    location: "Thuvairiman",
    bhk: "Land & Plot",
    image: "/images/rivercity.jpg",
  },
];


  
const Home = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const [activeTab, setActiveTab] = useState("Madurai");

  const projects =
    activeTab === "Madurai" ? maduraiProjects : coimbatoreProjects;

  const handleHeroSubmit = event => {
    event.preventDefault();
    setShowEnquiryForm(true);
  };

  return (
    <div className="home">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-overlay">
          <div className="container hero-container">
            {/* <div className="hero-content">
              <span className="hero-badge">Since 1993</span>
              <h1>Happy Homes — No. 1 Builders in Madurai</h1>
              <p className="hero-subtitle">
                Luxury villas and premium apartments delivered across Madurai and Coimbatore.
                Experience signature architecture, smart planning, and on-time delivery backed by
                three decades of excellence.
              </p>
              <div className="hero-actions">
                <button className="cta-button" onClick={() => setShowEnquiryForm(true)}>
                  Enquire Now
                </button>
                <button className="secondary-button" onClick={() => setShowEnquiryForm(true)}>
                  Download Brochure
                </button>
              </div>
              <div className="hero-stats">
                {heroStats.map(stat => (
                  <div key={stat.id} className="hero-stat">
                    <span className="hero-stat-value">{stat.value}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <form className="hero-form" onSubmit={handleHeroSubmit}>
              <h3>Let’s Build Your Home — Together</h3>
              <p className="hero-form-subtitle">2, 3, 4 &amp; 5 BHK Villas and Apartments!</p>
              <div className="form-group">
                <label htmlFor="hero-name">Your Name</label>
                <input id="hero-name" name="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="hero-phone">Phone</label>
                <input id="hero-phone" name="phone" type="tel" placeholder="+91" required />
              </div>
              <div className="form-group">
                <label htmlFor="hero-message">Message</label>
                <textarea id="hero-message" name="message" rows={3} placeholder="How can we help?" />
              </div>
              <button type="submit" className="cta-button form-submit">
                Submit
              </button>
              <p className="privacy-note">🔒 We respect your privacy. Your details are safe with us.</p>
            </form> */}
          </div>
        </div>
      </section>
      
     <section className="bestbuilder-section">
        <div className="container bestbuilder-grid" >
           <h1 className="animate-bestbuilder-one">Best Builders in Madurai - <span className="bestbuilder-span">Happy homes</span></h1>
           <h1 className="animate-bestbuilder-two">Best Builders in Madurai - <span className="bestbuilder-span">Since 1993</span> </h1>
           <p>Best Builders in Madurai for Dream Villas: With 32+ years of expertise and 5000+ homes built, Happy Homes Homes stands as the best builders in Madurai, delivering top-tier luxury villas in Madurai and premium properties in Madurai. As one of the top builders in Madurai, we take pride in our meticulous craftsmanship, innovation, and commitment to excellence. Our reputation as a trusted construction company in Madurai and leading promoters in Madurai makes us the go-to choice for those seeking new villa projects in Madurai. If you’re searching for builders in Madurai who deliver quality, precision, and reliability, Happy Homes Homes the top builders in madurai is your answer. Whether it’s house construction companies, apartment builders in Madurai, or premium housing projects in Madurai, we are committed to turning your dream home into reality</p>
          
          {/* {overviewContent.map(item => (
            <div key={item.id} className="best-card">
              <h2>{item.heading}</h2>
              {item.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ))} */}
        </div>
      </section>


{/* <section className="dropdowntext-section">
      <div className="container mx-auto max-w-2xl">
        <div className="accordion-item border-b border-gray-300">
        
          <div
            className="accordion-header flex justify-between items-center py-4 cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="text-lg font-semibold text-gray-800">
               <FaHome size={20} color="#2563eb" />{dropdownTextcontent.heading}
            </h2>
         
          </div>
             
          {isOpen && (
            <div className="accordion-content pb-4 text-gray-600 leading-relaxed">
              <p>{dropdownTextcontent.text}</p>
            </div>
          )}
        </div>
      </div>
    </section> */}

   <DropdownAccordion />

       <section className="stats-section">
      <div className="stats-container">
        {counters.map((item, index) => (
          <div key={index} className="stat-box">
            <div className="stat-number">
              <CountUp end={item.value} duration={2} separator="," />{item.suffix}
            </div>
            <div className="stat-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
      

{/* Card Section */}
 
    <section className="projects-section">
      <h2 className="section-title">
        Exclusive Ongoing Projects Of Jayabharath Best Builders In Madurai
      </h2>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "Madurai" ? "active" : ""}`}
          onClick={() => setActiveTab("Madurai")}
        >
          Madurai
        </button>
        <button
          className={`tab-btn ${activeTab === "Coimbatore" ? "active" : ""}`}
          onClick={() => setActiveTab("Coimbatore")}
        >
          Coimbatore
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <img src={p.image} alt={p.name} className="project-image" />
            <div className="project-content">
              <h4>{p.name}</h4>
              <p className="location">
                📍 {p.location}
              </p>
              <p className="bhk">{p.bhk}</p>

              <div className="project-links">
                <a href="#">🔗 View Project</a>
                <a href="#">⬇️ Download Brochure</a>
              </div>

              <button className="call-btn">Call Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
 
    

{/* Card Section End */}


      <section className="overview-section">
        <div className="container overview-grid">
          {overviewContent.map(item => (
            <div key={item.id} className="overview-card">
              <h2>{item.heading}</h2>
              {item.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="brochure-section">
        <div className="container">
          <div className="brochure-grid">
            {brochurePrompts.map(prompt => (
              <div key={prompt.id} className="brochure-card">
                <h3>{prompt.title}</h3>
                <p>{prompt.subtitle}</p>
                <button className="cta-button" onClick={() => setShowEnquiryForm(true)}>
                  Submit
                </button>
                <p className="privacy-note">🔒 We respect your privacy. Your details are safe with us.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <h2>Ongoing &amp; Upcoming Projects</h2>
          <p className="section-subtitle">
            Discover premium residential communities in Madurai and Coimbatore designed for comfort,
            connectivity, and long-term value.
          </p>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCardcomp key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Happy Homes?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>32+ Years Experience</h3>
              <p>Three decades of trusted construction excellence and flagship developments.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏠</div>
              <h3>5000+ Homes Delivered</h3>
              <p>Lakeside villas, skyline apartments, and gated townships across two cities.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h3>RERA &amp; OC Approved</h3>
              <p>Fully compliant projects with 100% legal clarity and transparent documentation.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Premium Specifications</h3>
              <p>Contemporary elevations, smart-home readiness, and resort-class amenities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="keyword-section">
        <div className="container">
          <div className="keyword-grid">
            {keywordGroups.map(group => (
              <div key={group.id} className="keyword-column">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showEnquiryForm && <EnquiryForm onClose={() => setShowEnquiryForm(false)} />}
    </div>
  );
};

export default Home;

