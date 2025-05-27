import React from 'react';
import './HistorialFavorito.css';

const HistorialFavorito = ({ historial }) => {
  if (!historial || historial.length === 0) return null;

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
    <div className="historial-favorito">
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
    </div>
  );
};

export default HistorialFavorito; 