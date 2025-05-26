import React from 'react';
import './CantidadSelector.css';

const CantidadSelector = ({ cantidad, setCantidad }) => (
  <div className="detalle-cantidad">
    <span>Cantidad</span>
    <div className="detalle-cantidad-controles">
      <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => setCantidad(c => c + 1)}>+</button>
    </div>
  </div>
);

export default CantidadSelector; 