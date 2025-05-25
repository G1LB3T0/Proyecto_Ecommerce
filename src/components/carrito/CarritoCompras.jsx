import { useCarrito } from '../../context/CarritoContext';
import './CarritoCompras.css';

const CarritoCompras = () => {
  const { state, dispatch } = useCarrito();

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) {
      dispatch({ type: 'ELIMINAR_ITEM', payload: id });
      return;
    }
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } });
  };

  const eliminarItem = (id) => {
    dispatch({ type: 'ELIMINAR_ITEM', payload: id });
  };

  const calcularTotal = () => {
    return state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  if (state.items.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega algunos productos para comenzar a comprar</p>
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
            <div className="item-detalles">
              <h3>{item.nombre}</h3>
              <p className="item-precio">{item.precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</p>
              <div className="controles-cantidad">
                <button 
                  onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                  className="btn-cantidad"
                >
                  -
                </button>
                <span className="cantidad">{item.cantidad}</span>
                <button 
                  onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                  className="btn-cantidad"
                >
                  +
                </button>
              </div>
              <p className="subtotal">Subtotal: { (item.precio * item.cantidad).toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' }) }</p>
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
        <span>{calcularTotal().toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
      </div>
      <button 
        className="btn-vaciar"
        onClick={() => dispatch({ type: 'VACIAR_CARRITO' })}
      >
        Vaciar carrito
      </button>
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