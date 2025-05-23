import React from 'react';

const RatingStars = ({ rating }) => (
  <span>{[...Array(5)].map((_, i) => i < rating ? '★' : '☆')}</span>
);

export default RatingStars; 