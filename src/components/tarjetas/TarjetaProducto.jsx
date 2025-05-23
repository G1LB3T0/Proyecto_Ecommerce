import { useState } from 'react';
import { useCarrito } from '../../context/CarritoContext';
import './TarjetaProducto.css';

const TarjetaProducto = ({ producto }) => {
  const { dispatch } = useCarrito();
  const [agregado, setAgregado] = useState(false);

  const agregarAlCarrito = () => {
    dispatch({
      type: 'AGREGAR_ITEM',
      payload: {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
      }
    });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="tarjeta-producto">
      {producto.oferta && <span className="etiqueta-oferta">Oferta</span>}
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <div className="precios">
        {producto.precioOriginal && (
          <del>{producto.precioOriginal} GTQ</del>
        )}
        <span>{producto.precio} GTQ</span>
      </div>
      <button 
        className={`boton-comprar ${agregado ? 'agregado' : ''}`}
        onClick={agregarAlCarrito}
      >
        {agregado ? '¡Agregado!' : 'Comprar ahora'}
      </button>
    </div>
  );
};

export default TarjetaProducto;
