import React from 'react';
import './TarjetaProducto.css';

const BotonFavorito = ({ esFavorito, onClick, historial }) => {
  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString('es-GT', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="favoritos-container">
      <button
        className={`boton-favorito${esFavorito ? ' activo' : ''}`}
        onClick={onClick}
        aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      {historial && historial.length > 0 && (
        <div className="historial-tooltip">
          <h4>Historial de favoritos</h4>
          <ul>
            {historial.map((item, index) => (
              <li key={index}>
                <span className="fecha">{formatearFecha(item.fecha)}</span>
                <span className="accion">{item.accion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BotonFavorito; 