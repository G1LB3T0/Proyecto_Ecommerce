import React from 'react';
import { useBusqueda } from './useBusqueda';
import './BarraBusqueda.css';

const BarraBusqueda = () => {
  const { busqueda, setBusqueda } = useBusqueda();

  return (
    <form className="barra-busqueda" onSubmit={e => e.preventDefault()}>
      <input
        type="search"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="barra-busqueda__input"
      />
    </form>
  );
};

export default BarraBusqueda; 