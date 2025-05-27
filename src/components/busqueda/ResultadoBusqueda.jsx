import React from 'react';
import PropTypes from 'prop-types';

const ResultadoBusqueda = ({ producto, onClick }) => {
  return (
    <div className="resultado-item" onClick={onClick}>
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="resultado-info">
        <h4>{producto.nombre}</h4>
        <p>Q{producto.precio.toFixed(2)}</p>
      </div>
    </div>
  );
};

ResultadoBusqueda.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ResultadoBusqueda; 