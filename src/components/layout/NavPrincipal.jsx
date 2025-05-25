import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavPrincipal.css';

const NavPrincipal = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const categorias = [
    { nombre: 'Ofertas', link: '/categoria/ofertas' },
    { nombre: 'Cover Duvets', link: '/categoria/cover-duvets' },
    { nombre: 'Vajillas', link: '/categoria/vajillas' },
    { nombre: 'Cubiertos', link: '/categoria/cubiertos' },
    { nombre: 'Lámparas', link: '/categoria/lamparas' },
    { nombre: 'Alfombras', link: '/categoria/alfombras' },
    { nombre: 'Accesorios', link: '/categoria/accesorios' }
  ];

  const handleBuscar = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/buscar/${busqueda.trim()}`);
      setBusqueda('');
    }
  };

  return (
    <nav className="nav-principal">
      <div className="nav-contenedor">
        <Link to="/" className="nav-logo">
          Hogar & Decoración
        </Link>
        
        <form className="nav-busqueda" onSubmit={handleBuscar}>
          <input
            type="search"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="nav-categorias">
          {categorias.map(cat => (
            <Link 
              key={cat.nombre} 
              to={cat.link}
              className="nav-categoria-link"
            >
              {cat.nombre}
            </Link>
          ))}
        </div>
    </div>
    </nav>
  );
};

export default NavPrincipal;
