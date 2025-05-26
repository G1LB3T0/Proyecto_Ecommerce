import React from 'react';
import { Link } from 'react-router-dom';
import BarraBusqueda from './BarraBusqueda';
import './MainNav.css';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__logo">
        <Link to="/">Hogar & Decoración</Link>
      </div>
      <BarraBusqueda />
      <div className="main-nav__links">
        <Link to="/productos">Productos</Link>
      </div>
    </nav>
  );
};

export default MainNav; 