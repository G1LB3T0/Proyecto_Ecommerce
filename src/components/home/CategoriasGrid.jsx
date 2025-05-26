import React from 'react';
import { Link } from 'react-router-dom';
import { categorias } from '../../data/categorias';
import './CategoriasGrid.css';

const CategoriasGrid = () => (
  <section className="home__categorias">
    <h2 className="home__categorias-titulo">Explora nuestras categorías</h2>
    <div className="home__categorias-grid">
      {categorias.map(cat => (
        <Link to={cat.link} className="home__categoria" key={cat.nombre}>
          <div className="home__categoria-img-container">
            <img src={cat.imagen} alt={cat.nombre} className="home__categoria-img" />
            <div className="home__categoria-overlay">
              <h3 className="home__categoria-nombre">{cat.nombre}</h3>
              <p className="home__categoria-descripcion">{cat.descripcion}</p>
              <span className="home__categoria-arrow">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoriasGrid; 