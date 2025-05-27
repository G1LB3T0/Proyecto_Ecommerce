import React from 'react';
import './TarjetaProducto.css';

const InfoProducto = ({ nombre, precio, precioOriginal, rating }) => {
  const ratingEstrellas = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <>
      <h3>{nombre}</h3>
      <div className="rating"><span>{ratingEstrellas}</span></div>
      <div className="precios">
        {precioOriginal > precio && (
          <del>{precioOriginal.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</del>
        )}
        <span>{precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
      </div>
    </>
  );
};

export default InfoProducto; 