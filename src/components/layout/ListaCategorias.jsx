import React from 'react';
import { Link } from 'react-router-dom';
import './NavPrincipal.css';

const categorias = [
  { nombre: 'Ofertas', link: '/categoria/ofertas' },
  { nombre: 'Cover Duvets', link: '/categoria/cover-duvets' },
  { nombre: 'Accesorios', link: '/categoria/accesorios' }
];

const ListaCategorias = () => (
  <div className="nav-categorias">
    {categorias.map(cat => (
      <Link key={cat.nombre} to={cat.link} className="nav-categoria-link">
        {cat.nombre}
      </Link>
    ))}
  </div>
);
export default ListaCategorias; 