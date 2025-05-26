import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavPrincipal.css';

const BusquedaNav = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/buscar/${busqueda.trim()}`);
      setBusqueda('');
    }
  };

  return (
    <form className="nav-busqueda" onSubmit={handleBuscar}>
      <input
        type="search"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default BusquedaNav; 