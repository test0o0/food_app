import React from 'react';
import './reviews.css'; // Import the CSS file

const reviews = [
  {
    name: 'St Gix',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    feedback:
      'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    name: 'St Gix',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    feedback:
      'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    name: 'St Gix',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    feedback:
      'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    name: 'St Gix',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    feedback:
      'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
];

function CustomerReviews() {
  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <img src={review.image} alt={review.name} className="review-avatar" />
              <div>
                <h3>{review.name}</h3>
                <p className="location">{review.location}</p>
              </div>
            </div>
            <div className="review-body">
              <p>{review.feedback}</p>
            </div>
            <div className="review-footer">
              <p className="review-date">
                <span role="img" aria-label="clock">
                  🕒
                </span>{' '}
                {review.date}
              </p>
              <p className="review-rating">
                {Array(review.rating)
                  .fill('⭐')
                  .join('')}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="arrow-button">{'<'}</button>
        <span>3.4</span>
        <button className="arrow-button">{'>'}</button>
      </div>
    </div>
  );
}

export default CustomerReviews;
