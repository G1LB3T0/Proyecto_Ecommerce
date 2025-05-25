import React from 'react';
import TarjetaCategoria from '../tarjetas/TarjetaCategoria';
import './ListaCategorias.css';

const ListaCategorias = ({ categorias }) => (
  <div className="lista-categorias">
    {categorias.map(cat => (
      <TarjetaCategoria key={cat.nombre} categoria={cat} />
    ))}
  </div>
);

export default ListaCategorias; 