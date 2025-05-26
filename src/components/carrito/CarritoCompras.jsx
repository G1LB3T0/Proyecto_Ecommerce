import React from 'react';
import { useCarrito } from '../../context/CarritoContext';
import CarritoVacio from './CarritoVacio';
import ItemCarrito from './ItemCarrito';
import ResumenCarrito from './ResumenCarrito';
import './CarritoCompras.css';

const LIMITE_COMPRA = 7000;

const validarLimiteCompra = (total) => {
  if (total > LIMITE_COMPRA) {
    alert(`El total no puede exceder Q${LIMITE_COMPRA.toLocaleString()}`);
    return false;
  }
  return true;
};

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

const CarritoCompras = () => {
  const { state, dispatch } = useCarrito();

  const calcularTotal = () => state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) {
      dispatch({ type: 'ELIMINAR_ITEM', payload: id });
      return;
    }

    const item = state.items.find(item => item.id === id);
    const nuevoTotal = calcularTotal() - (item.precio * item.cantidad) + (item.precio * cantidad);
    
    if (validarLimiteCompra(nuevoTotal)) {
      dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } });
    }
  };

  const handlePagar = () => {
    if (validarLimiteCompra(calcularTotal())) {
      alert('¡Gracias por tu compra!');
    }
  };

  if (state.items.length === 0) return <CarritoVacio />;

  return (
    <div className="carrito-compras">
      <h2>Carrito de Compras</h2>
      <ListaItems 
        items={state.items}
        onActualizarCantidad={actualizarCantidad}
        onEliminar={id => dispatch({ type: 'ELIMINAR_ITEM', payload: id })}
      />
      <ResumenCarrito
        total={calcularTotal()}
        onVaciar={() => dispatch({ type: 'VACIAR_CARRITO' })}
        onPagar={handlePagar}
      />
    </div>
  );
};

export default CarritoCompras; 