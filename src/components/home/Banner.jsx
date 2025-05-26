import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => (
  <section className="home__banner">
    <div className="home__banner-content">
      <h2>Bienvenidos a</h2>
      <h1>Hogar & Decoración</h1>
      <p className="home__banner-subtitle">Encuentra todo para hacer de tu hogar un lugar especial</p>
      <Link to="/productos" className="home__banner-cta">Ver todos los productos</Link>
    </div>
    <img className="home__img-banner" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=60" alt="Banner principal" />
  </section>
);

export default Banner; 