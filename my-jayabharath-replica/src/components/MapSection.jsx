import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          title="Happy Homes Pvt Ltd"
          src="https://maps.google.com/maps?q=Jayabharath%20Homes%20Pvt%20Ltd&t=m&z=14&output=embed&iwloc=near"
          loading="lazy"
          allowFullScreen
          aria-label="Happy Homes Pvt Ltd"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
