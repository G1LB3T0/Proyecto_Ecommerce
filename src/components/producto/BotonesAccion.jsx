import React from 'react';
import './BotonesAccion.css';

const BotonesAccion = ({ agregado, onAgregar, onComprar }) => (
  <div className="detalle-botones">
    <button className={`detalle-btn-agregar${agregado ? ' agregado' : ''}`} onClick={onAgregar}>
      {agregado ? '¡Agregado!' : 'Agregar al carrito'}
    </button>
    <button className="detalle-btn-comprar" onClick={onComprar}>
      Comprar ahora
    </button>
  </div>
);

export default BotonesAccion; 