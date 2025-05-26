import React from 'react';
import './PrecioProducto.css';

const PrecioProducto = ({ precio, precioOriginal }) => (
  <div className="detalle-precio">
    <span className="precio">{precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
    {precioOriginal && (
      <del className="precio-original">
        {precioOriginal.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}
      </del>
    )}
  </div>
);

export default PrecioProducto; 