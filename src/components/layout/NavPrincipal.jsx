import React from 'react';
import { Link } from 'react-router-dom';
import BusquedaNav from './BusquedaNav';
import ListaCategorias from './ListaCategorias';
import './NavPrincipal.css';

const NavPrincipal = () => (
  <nav className="nav-principal">
    <div className="nav-contenedor">
      <Link to="/" className="nav-logo">Hogar & Decoración</Link>
      <BusquedaNav />
      <ListaCategorias />
    </div>
  </nav>
);

export default NavPrincipal;
