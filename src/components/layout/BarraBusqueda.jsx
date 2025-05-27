import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BarraBusqueda.css';

const BarraBusqueda = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (!location.pathname.includes('/buscar')) {
      setBusqueda('');
    }
  }, [location.pathname]);

  const handleBuscar = () => {
    if (busqueda.trim()) {
      navigate(`/buscar/${encodeURIComponent(busqueda.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBuscar();
    }
  };

  return (
    <div className="barra-busqueda">
      <div className="barra-busqueda__input-container">
        <input
          ref={inputRef}
          type="search"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyPress={handleKeyPress}
          className="barra-busqueda__input"
        />
      </div>
      <button 
        className="barra-busqueda__btn"
        onClick={handleBuscar}
        aria-label="Buscar productos"
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default BarraBusqueda; 