import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BarraBusqueda.css';

const BarraBusqueda = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (location.pathname.startsWith('/producto/')) {
      setBusqueda('');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (busqueda.trim() === '') return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      navigate(`/buscar/${encodeURIComponent(busqueda.trim())}`);
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [busqueda, navigate]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <form className="barra-busqueda" onSubmit={e => e.preventDefault()}>
      <input
        type="search"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={handleChange}
        className="barra-busqueda__input"
      />
    </form>
  );
};

export default BarraBusqueda; 