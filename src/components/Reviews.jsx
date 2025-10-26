// src/components/Reviews.jsx
import React, { useState } from 'react';
import './Reviews.css';

import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';

const reviewsData = [
    // Add more reviews to make the slider more effective
  { name: 'Anna Mathew', timestamp: 'one day ago', avatar: avatar1, rating: 5, text: 'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back! We booked private dining for our anniversary.' },
  { name: 'Gerrin Tom', timestamp: 'one day ago', avatar: avatar2, rating: 5, text: 'We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!' },
  { name: 'Mery Eliza', timestamp: 'one day ago', avatar: avatar3, rating: 5, text: "Best steak I've ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!" },
  { name: 'John Doe', timestamp: 'two days ago', avatar: avatar1, rating: 4, text: 'Fantastic atmosphere and great service. The pasta was incredible, though I wish the portion was a bit larger. Will return to try the specials.' },
];

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ))}
  </div>
);

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
    };

    const handleNext = () => {
        // In a 3-card view, the last possible start index is total_items - 3
        const maxIndex = reviewsData.length > 3 ? reviewsData.length - 3 : 0;
        setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : maxIndex));
    };

    const canGoPrev = currentIndex > 0;
    const canGoNext = reviewsData.length > 3 && currentIndex < reviewsData.length - 3;

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <p className="reviews-subtitle">REVIEWS</p>
        <h2 className="reviews-title">Hear Our Guests</h2>
      </div>

      <div className="reviews-carousel">
        <div className="reviews-track" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {reviewsData.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-author">
                <img src={review.avatar} alt={review.name} className="author-avatar" />
                <div className="author-info">
                  <h3 className="author-name">{review.name}</h3>
                  <p className="review-timestamp">{review.timestamp}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-nav">
        <button onClick={handlePrev} disabled={!canGoPrev} className="review-arrow">←</button>
        <button onClick={handleNext} disabled={!canGoNext} className="review-arrow">→</button>
      </div>
    </section>
  );
};

export default Reviews;