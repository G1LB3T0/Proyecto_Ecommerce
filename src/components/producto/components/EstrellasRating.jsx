import React from 'react';

const EstrellasRating = ({ rating, esInteractivo, onRating, onHover }) => {
  return (
    <div className={`estrellas-rating ${esInteractivo ? 'interactivo' : ''}`}>
      {[1, 2, 3, 4, 5].map((estrella) => (
        <span
          key={estrella}
          className={`estrella ${estrella <= rating ? 'activa' : ''}`}
          onClick={() => esInteractivo && onRating(estrella)}
          onMouseEnter={() => esInteractivo && onHover(estrella)}
          onMouseLeave={() => esInteractivo && onHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default EstrellasRating; 