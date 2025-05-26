import React from 'react';
import './CarritoCompras.css';

const ItemCarrito = ({ item, onActualizarCantidad, onEliminar }) => (
  <div className="carrito-item">
    <img src={item.imagen} alt={item.nombre} />
    <div className="item-detalles">
      <h3>{item.nombre}</h3>
      <p className="item-precio">{item.precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</p>
      <div className="controles-cantidad">
        <button onClick={() => onActualizarCantidad(item.id, item.cantidad - 1)} className="btn-cantidad">-</button>
        <span className="cantidad">{item.cantidad}</span>
        <button onClick={() => onActualizarCantidad(item.id, item.cantidad + 1)} className="btn-cantidad">+</button>
      </div>
      <p className="subtotal">Subtotal: {(item.precio * item.cantidad).toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</p>
    </div>
    <button onClick={() => onEliminar(item.id)} className="btn-eliminar">×</button>
  </div>
);

export default ItemCarrito; 