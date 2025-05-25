import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import productosMock from '../utils/productosMock';
import { useCarrito } from '../context/CarritoContext';
import './DetalleProducto.css';

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCarrito();
  const producto = productosMock.find(p => p.id === Number(id));
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  if (!producto) {
    return <div className="detalle-vacio">Producto no encontrado</div>;
  }

  const handleAgregar = () => {
    dispatch({
      type: 'AGREGAR_ITEM',
      payload: {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad
      }
    });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  const handleComprarAhora = () => {
    handleAgregar();
    setTimeout(() => navigate('/carrito'), 500);
  };

  const renderRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="detalle-producto-page">
      <div className="detalle-producto-img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detalle-producto-info">
        <h1>{producto.nombre}</h1>
        <div className="detalle-precio">
          <span className="precio">{producto.precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
          {producto.precioOriginal && (
            <del className="precio-original">{producto.precioOriginal.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</del>
          )}
        </div>
        <div className="detalle-rating">{renderRating(producto.rating)}</div>
        <div className="detalle-cantidad">
          <span>Cantidad</span>
          <div className="detalle-cantidad-controles">
            <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>-</button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(c => c + 1)}>+</button>
          </div>
        </div>
        <button className={`detalle-btn-agregar${agregado ? ' agregado' : ''}`} onClick={handleAgregar}>
          {agregado ? '¡Agregado!' : 'Agregar al carrito'}
        </button>
        <button className="detalle-btn-comprar" onClick={handleComprarAhora}>
          Comprar ahora
        </button>
        <div className="detalle-descripcion">
          <h3>Descripción</h3>
          <p>{producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
} 