import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../components/layout/CartButton';
import './Home.css';

const categorias = [
  {
    nombre: 'Cubiertos',
    imagen: 'https://picsum.photos/400/400?random=1',
    link: '/cubiertos'
  },
  {
    nombre: 'Cover duvets',
    imagen: 'https://picsum.photos/400/400?random=2',
    link: '/cover-duvets'
  }
];

export default function Home() {
  return (
    <div className="home">
      <CartButton count={0} />
      <section className="home__banner">
        <h2>Bienvenidos</h2>
        <h1>Hogar, dulce hogar</h1>
        <img
          className="home__img-banner"
          src="https://picsum.photos/900/400?random=3"
          alt="Banner principal"
        />
      </section>
      <section className="home__categorias">
        {categorias.map(cat => (
          <Link to={cat.link} className="home__categoria" key={cat.nombre}>
            <img src={cat.imagen} alt={cat.nombre} className="home__categoria-img" />
            <div className="home__categoria-nombre">{cat.nombre} <span>→</span></div>
          </Link>
        ))}
      </section>
    </div>
  );
} 