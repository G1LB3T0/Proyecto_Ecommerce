import React from 'react';
import { useBusqueda } from './useBusqueda';
import './BarraBusqueda.css';

const BarraBusqueda = () => {
  const { busqueda, setBusqueda } = useBusqueda();

  return (
    <div className="barra-busqueda">
      <div className="barra-busqueda__input-container">
        <input
          type="search"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="barra-busqueda__input"
        />
      </div>
      <button 
        className="barra-busqueda__btn"
        aria-label="Buscar productos"
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default BarraBusqueda; 