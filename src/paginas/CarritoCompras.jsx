import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import './CarritoCompras.css';

const CarritoCompras = () => {
  const { state, dispatch } = useCarrito();

  const calcularTotal = () => {
    return state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    dispatch({
      type: 'ACTUALIZAR_CANTIDAD',
      payload: { id, cantidad: nuevaCantidad }
    });
  };

  const eliminarItem = (id) => {
    dispatch({
      type: 'ELIMINAR_ITEM',
      payload: { id }
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos para comenzar a comprar!</p>
      </div>
    );
  }

  return (
    <div className="carrito-compras">
      <h2>Carrito de Compras</h2>
      <div className="carrito-items">
        {state.items.map((item) => (
          <div key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} />
            <div className="item-info">
              <h3>{item.nombre}</h3>
              <p className="item-precio">${item.precio}</p>
            </div>
            <div className="item-cantidad">
              <button 
                onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                className="btn-cantidad"
              >
                -
              </button>
              <span>{item.cantidad}</span>
              <button 
                onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                className="btn-cantidad"
              >
                +
              </button>
            </div>
            <div className="item-subtotal">
              ${(item.precio * item.cantidad).toFixed(2)}
            </div>
            <button 
              onClick={() => eliminarItem(item.id)}
              className="btn-eliminar"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="carrito-total">
        <span>Total:</span>
        <span>${calcularTotal().toFixed(2)}</span>
      </div>
      <button 
        className="btn-pagar"
        onClick={() => alert('¡Gracias por tu compra!')}
      >
        Proceder al Pago
      </button>
    </div>
  );
};

export default CarritoCompras; 