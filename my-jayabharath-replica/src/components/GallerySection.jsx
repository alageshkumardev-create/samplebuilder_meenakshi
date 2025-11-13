import React from "react";
import "./GallerySection.css";

const GallerySection = () => {
  const galleryItems = [
    {
      title: "Jayabharath Oscar City Key Handover for Villa K-01",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Jayabharath-Oscar-City-Key-Handover-K-01-jpg.webp",
    },
    {
      title: "Jayabharath Oscar City Key Handover for Villa R-02",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Jayabharath-Oscar-City-Key-Handover-R-02-jpg.webp",
    },
    {
      title: "Jayabharath Classic City Plot Number T-04 AND 05",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Jayabharath-Classic-City-Plot-Number-T-04-AND-05-jpg-e1706339810233.webp",
    },
    {
      title: "Jayabharath Classic City Plot Number U-01 & 02",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Jayabharath-Classic-City-Plot-Number-u-01-02-jpg-e1706339788930.webp",
    },
    {
      title: "Titan City Vasthu I-02",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Titan-City-Vasthu-I-02-jpeg.webp",
    },
    {
      title: "Titan City Vasthu C-01",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Titan-City-Vasthu-C-01-jpeg.webp",
    },
    {
      title: "Classic City Vasthu U-06",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Classic-City-Vasthu-U-06-scaled.webp",
    },
    {
      title: "Classic City Vasthu U-07",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Classic-City-Vasthu-U-07-scaled.webp",
    },
    {
      title: "Classic City Vasthu U-09",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Classic-City-Vasthu-U-09-scaled.webp",
    },
    {
      title: "Jayabharath Classic City Plot Number S 05",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Jayabharath-Classic-City-Plot-Number-S-05-scaled.webp",
    },
    {
      title: "Green City Vasthu A-22",
      img: "https://jayabharath.com/wp-content/uploads/2024/01/Green-City-Vasthu-A-22.jpeg",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-text">
        <p>
          <a href="https://jayabharath.com/enquire-now-jayabharath-homes/">
            Happy Homes
          </a>{" "}
          is dedicated to turning your dream home into a reality. As the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Villa"
            target="_blank"
            rel="noopener noreferrer"
          >
            best builders in Madurai
          </a>
          , we focus on quality and customer satisfaction, ensuring that each
          luxury villa in Madurai becomes a lasting symbol of your dreams. Our
          clients’ joyful journeys with us are filled with seamless experiences,
          where we not only meet but exceed their expectations. We take pride in
          crafting properties in Madurai that bring happiness and fulfillment,
          making every step of the process a celebration of your dream home.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="overlay">
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
