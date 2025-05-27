import React from 'react';
import { Link } from 'react-router-dom';
import BarraBusqueda from './BarraBusqueda';
import ListaCategorias from './ListaCategorias';
import './NavPrincipal.css';

const NavPrincipal = () => (
  <nav className="nav-principal">
    <div className="nav-contenedor">
      <Link to="/" className="nav-logo">Hogar & Decoración</Link>
      <BarraBusqueda />
      <ListaCategorias />
    </div>
  </nav>
);

export default NavPrincipal;
