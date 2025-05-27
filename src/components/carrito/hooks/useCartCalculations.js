import { useMemo } from 'react';
import { useCarrito } from '../../../context/CarritoContext';

export const useCartCalculations = () => {
  const { state } = useCarrito();

  const total = useMemo(() => {
    return state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }, [state.items]);

  const cantidadTotal = useMemo(() => {
    return state.items.reduce((total, item) => total + item.cantidad, 0);
  }, [state.items]);

  return {
    total,
    cantidadTotal,
    items: state.items
  };
}; 