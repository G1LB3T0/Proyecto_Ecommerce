import { useState } from 'react';
import './RatingProducto.css';

const RatingProducto = ({ ratingOficial }) => {
  const [ratingUsuario, setRatingUsuario] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (valor) => {
    setRatingUsuario(valor);
  };

  const renderEstrellas = (rating, esInteractivo = false) => {
    return (
      <div className={`estrellas-rating ${esInteractivo ? 'interactivo' : ''}`}>
        {[1, 2, 3, 4, 5].map((estrella) => (
          <span
            key={estrella}
            className={`estrella ${estrella <= (hoverRating || rating) ? 'activa' : ''}`}
            onClick={() => esInteractivo && handleRating(estrella)}
            onMouseEnter={() => esInteractivo && setHoverRating(estrella)}
            onMouseLeave={() => esInteractivo && setHoverRating(0)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="rating-container">
      <div className="rating-oficial">
        <span className="rating-label">Rating Oficial:</span>
        {renderEstrellas(ratingOficial)}
        <span className="rating-valor">{ratingOficial.toFixed(1)}</span>
      </div>
      <div className="rating-usuario">
        <span className="rating-label">Tu Rating:</span>
        {renderEstrellas(ratingUsuario, true)}
        {ratingUsuario > 0 && <span className="rating-valor">{ratingUsuario.toFixed(1)}</span>}
      </div>
    </div>
  );
};

export default RatingProducto; 