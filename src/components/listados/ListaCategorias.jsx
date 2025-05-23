import React from 'react';

const ListaCategorias = ({ categorias }) => (
  <div className="lista-categorias">
    {categorias.map(cat => (
      <div key={cat.id} className="categoria-item">
        <img src={cat.imagen} alt={cat.nombre} />
        <span>{cat.nombre}</span>
      </div>
    ))}
  </div>
);

export default ListaCategorias; 