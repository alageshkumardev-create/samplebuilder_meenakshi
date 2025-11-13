import React, { useState, useMemo } from "react";
import "./Testimonial.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      date: "2024-11-01",
      rating: 5,
      review: "Excellent construction quality and professional team. Highly recommended!",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Meena Priya",
      date: "2024-10-15",
      rating: 4.5,
      review: "Very good experience from start to finish. Transparent and reliable.",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Vignesh S",
      date: "2024-09-22",
      rating: 4,
      review: "The team was helpful and guided me throughout my home purchase process.",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: 4,
      name: "Anjali Devi",
      date: "2024-08-30",
      rating: 5,
      review: "Loved their professionalism and quality work. I’m very happy with my new home!",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      id: 5,
      name: "Arun Prakash",
      date: "2024-07-18",
      rating: 3.5,
      review: "Good experience overall, but communication could be improved slightly.",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 6,
      name: "Divya R",
      date: "2024-07-02",
      rating: 4.8,
      review: "They deliver on time and ensure good quality. Definitely trustworthy.",
      image: "https://i.pravatar.cc/100?img=6",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const itemsPerPage = 4;

  // Calculate average rating
  const averageRating = useMemo(() => {
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonials.length).toFixed(1);
  }, [testimonials]);

  // Function to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    if (halfStar) stars.push(<span key="half" className="star half">★</span>);
    while (stars.length < 5) {
      stars.push(<span key={`empty-${stars.length}`} className="star empty">★</span>);
    }
    return stars;
  };

  const handleViewMore = () => {
    if (visibleCount >= testimonials.length) setVisibleCount(itemsPerPage);
    else setVisibleCount((prev) => prev + itemsPerPage);
  };

  return (
    <div className="testimonials-section">
      <h2 className="heading">Our Happy Customers</h2>

      {/* ⭐ Average Rating Section */}
      <div className="rating-summary">
        <h3>{averageRating} / 5</h3>
        <div className="stars">{renderStars(averageRating)}</div>
        <p>Based on {testimonials.length} reviews</p>
      </div>

      {/* 🧱 Testimonials Grid */}
      <div className="testimonial-grid">
        {testimonials.slice(0, visibleCount).map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <div>
                <h4>{t.name}</h4>
                <p className="testimonial-date">{new Date(t.date).toDateString()}</p>
              </div>
            </div>
            <div className="stars">{renderStars(t.rating)}</div>
            <p className="testimonial-text">“{t.review}”</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button onClick={handleViewMore} className="view-more-btn">
        {visibleCount >= testimonials.length ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default Testimonials;
