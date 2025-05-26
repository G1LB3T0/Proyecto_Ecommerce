import React, { useState, useEffect } from 'react';
import './EstrellasCalificacion.css';

const EstrellasCalificacion = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [userRating, setUserRating] = useState(rating);

  useEffect(() => {
    setUserRating(rating);
  }, [rating]);

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="estrellas-calificacion">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`estrella ${star <= userRating ? 'seleccionada' : ''}`}
          onClick={() => handleRatingChange(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        >
          {star <= (hoverRating || userRating) ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default EstrellasCalificacion; 