import React from 'react';
import { Link } from 'react-router-dom';
import { useFavoritos } from '../../context/FavoritosContext';
import './MainNav.css';

const MainNav = () => {
  const { favoritos } = useFavoritos();

  return (
    <nav className="main-nav">
      <div className="main-nav__logo">
        <Link to="/">Hogar & Decoración</Link>
      </div>
      <div className="main-nav__links">
        <Link to="/productos">Productos</Link>
        <Link to="/categoria/ofertas">Ofertas</Link>
        <Link to="/favoritos" className="main-nav__favoritos">
          Favoritos
          {favoritos.length > 0 && (
            <span className="main-nav__favoritos-badge">{favoritos.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default MainNav; 