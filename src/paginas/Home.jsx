import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../components/carrito/CartButton';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';
import './Home.css';

const categorias = [
  {
    nombre: 'Cubiertos',
    imagen: 'https://cdn.shopify.com/s/files/1/0368/3837/5468/files/2-cubiertos.jpg?v=1724440493',
    link: '/categoria/cubiertos',
    descripcion: 'Sets de cubiertos premium en acero inoxidable'
  },
  {
    nombre: 'Vajillas',
    imagen: 'https://construmateriales.com.co/wp-content/uploads/2022/05/ESPLENDOR.jpg',
    link: '/categoria/vajillas',
    descripcion: 'Vajillas de cerámica y porcelana para tu cocina'
  },
  {
    nombre: 'Lámparas',
    imagen: 'https://hips.hearstapps.com/hmg-prod/images/lampra-stilnovo-1653552790.jpg',
    link: '/categoria/lamparas',
    descripcion: 'Lámparas y velas para iluminar tu hogar'
  },
  {
    nombre: 'Alfombras',
    imagen: 'https://www.bazzarstore.com/cdn/shop/collections/image_d2ba16a8-d99d-4e35-b001-cacf62262908_1200x1200.jpg?v=1668193593',
    link: '/categoria/alfombras',
    descripcion: 'Alfombras modernas y lavables para cada espacio'
  },
  {
    nombre: 'Cover Duvets',
    imagen: 'https://m.media-amazon.com/images/I/81-WcxN69tL._AC_UF894,1000_QL80_.jpg',
    link: '/categoria/cover-duvets',
    descripcion: 'Funda de edredón en algodón premium, diseño minimalista en tono gris suave.'
  },
  {
    nombre: 'Accesorios',
    imagen: 'https://cdn.shopify.com/s/files/1/2098/0315/files/23-Accesorios-decorativos4_2048x2048.jpg?v=1540245015',
    link: '/categoria/accesorios',
    descripcion: 'Accesorios decorativos para tu hogar'
  }
];

export default function Home() {
  // Filtrar productos en oferta
  const productosOferta = productosMock
    .filter(p => p.oferta)
    .slice(0, 4); // Solo mostrar 4 productos en oferta

  return (
    <div className="home">
      <CartButton />
      <section className="home__banner">
        <div className="home__banner-content">
          <h2>Bienvenidos a</h2>
          <h1>Hogar & Decoración</h1>
          <p className="home__banner-subtitle">Encuentra todo para hacer de tu hogar un lugar especial</p>
          <Link to="/productos" className="home__banner-cta">Ver todos los productos</Link>
        </div>
        <img
          className="home__img-banner"
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=60"
          alt="Banner principal"
        />
      </section>

      <section className="home__ofertas">
        <div className="home__ofertas-header">
          <h2>Ofertas Especiales</h2>
          <Link to="/categoria/ofertas" className="home__ofertas-ver-todo">
            Ver todas las ofertas →
          </Link>
        </div>
        <ListaProductos productos={productosOferta} />
      </section>

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
    </div>
  );
} 