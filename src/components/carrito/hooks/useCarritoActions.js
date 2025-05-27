import { useMemo } from 'react';
import { useCarrito } from '../../../context/CarritoContext';
import { validarLimiteCompra } from '../utils/carritoUtils';

export const useCarritoActions = () => {
  const { state, dispatch } = useCarrito();

  const calcularTotal = useMemo(() => {
    return state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }, [state.items]);

  const encontrarItem = useMemo(() => {
    return (id) => state.items.find(item => item.id === id);
  }, [state.items]);

  const agregarItem = (item) => {
    const itemExistente = encontrarItem(item.id);
    const nuevoTotal = calcularTotal + (item.precio * item.cantidad);
    if (validarLimiteCompra(nuevoTotal)) {
      dispatch({ type: 'AGREGAR_ITEM', payload: item });
      return true;
    }
    return false;
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) {
      dispatch({ type: 'ELIMINAR_ITEM', payload: id });
      return;
    }
    const item = encontrarItem(id);
    const nuevoTotal = calcularTotal - (item.precio * item.cantidad) + (item.precio * cantidad);
    if (validarLimiteCompra(nuevoTotal)) {
      dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } });
    }
  };

  const handlePagar = () => {
    if (validarLimiteCompra(calcularTotal)) {
      alert('¡Gracias por tu compra!');
    }
  };

  return {
    items: state.items,
    calcularTotal,
    agregarItem,
    actualizarCantidad,
    handlePagar,
    eliminarItem: (id) => dispatch({ type: 'ELIMINAR_ITEM', payload: id }),
    vaciarCarrito: () => dispatch({ type: 'VACIAR_CARRITO' })
  };
}; 