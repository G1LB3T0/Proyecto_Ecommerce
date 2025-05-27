import React from 'react';
import CarritoVacio from './CarritoVacio';
import ListaItems from './components/ListaItems';
import ResumenCarrito from './ResumenCarrito';
import { useCarritoActions } from './hooks/useCarritoActions';
import { useCartCalculations } from './hooks/useCartCalculations';
import './CarritoCompras.css';

const CarritoCompras = () => {
  const { items, total } = useCartCalculations();
  const { actualizarCantidad, handlePagar, eliminarItem, vaciarCarrito } = useCarritoActions();

  if (items.length === 0) return <CarritoVacio />;

  return (
    <div className="carrito-compras">
      <h2>Carrito de Compras</h2>
      <ListaItems 
        items={items}
        onActualizarCantidad={actualizarCantidad}
        onEliminar={eliminarItem}
      />
      <ResumenCarrito
        total={total}
        onVaciar={vaciarCarrito}
        onPagar={handlePagar}
      />
    </div>
  );
};

export default CarritoCompras; 