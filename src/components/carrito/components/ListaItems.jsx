import React from 'react';
import ItemCarrito from '../ItemCarrito';

const ListaItems = ({ items, onActualizarCantidad, onEliminar }) => (
  <div className="carrito-items">
    {items.map(item => (
      <ItemCarrito
        key={item.id}
        item={item}
        onActualizarCantidad={onActualizarCantidad}
        onEliminar={onEliminar}
      />
    ))}
  </div>
);

export default ListaItems; 