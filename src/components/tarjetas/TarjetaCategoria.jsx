import React from 'react';
import { Link } from 'react-router-dom';
import './TarjetaCategoria.css';

const TarjetaCategoria = ({ categoria }) => {
  return (
    <Link to={categoria.link} className="tarjeta-categoria">
      <div className="tarjeta-categoria__imagen-container">
        <img 
          src={categoria.imagen} 
          alt={categoria.nombre} 
          className="tarjeta-categoria__imagen"
        />
        <div className="tarjeta-categoria__overlay">
          <h3 className="tarjeta-categoria__nombre">{categoria.nombre}</h3>
          <p className="tarjeta-categoria__descripcion">{categoria.descripcion}</p>
          <span className="tarjeta-categoria__flecha">→</span>
        </div>
      </div>
    </Link>
  );
};

export default TarjetaCategoria;
