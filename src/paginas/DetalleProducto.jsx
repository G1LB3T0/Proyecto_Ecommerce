import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCarritoActions } from '../components/carrito/hooks/useCarritoActions';
import { useFavoritos } from '../context/FavoritosContext';
import { useHistorial } from '../context/HistorialContext';
import RatingProducto from '../components/producto/RatingProducto';
import Recomendaciones from '../components/producto/Recomendaciones';
import productosMock from '../utils/productosMock';
import './DetalleProducto.css';

const LIMITE_COMPRA = 7000;

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarItem } = useCarritoActions();
  const { toggleFavorito, esFavorito } = useFavoritos();
  const { historial, dispatch: dispatchHistorial } = useHistorial();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    const productoEncontrado = productosMock.find(p => p.id === parseInt(id));
    if (productoEncontrado) {
      const productoFormateado = {
        ...productoEncontrado,
        precio: parseFloat(productoEncontrado.precio) || 0,
        precioOriginal: parseFloat(productoEncontrado.precioOriginal) || 0,
        rating: parseFloat(productoEncontrado.rating) || 0,
        stock: parseInt(productoEncontrado.stock) || 10
      };
      setProducto(productoFormateado);
      dispatchHistorial({ type: 'AGREGAR_VISITA', payload: productoFormateado });
    }
  }, [id, dispatchHistorial]);

  const handleCantidad = (operacion) => {
    if (!producto) return;
    
    setCantidad(prevCantidad => {
      const nuevaCantidad = operacion === 'sumar' 
        ? prevCantidad + 1 
        : prevCantidad - 1;
      
      return Math.min(Math.max(1, nuevaCantidad), 9);
    });
  };

  const agregarAlCarrito = (e) => {
    e.preventDefault();
    if (!producto) return;

    const itemAgregado = agregarItem({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: cantidad
    });

    if (itemAgregado) {
      setAgregado(true);
      setTimeout(() => {
        setAgregado(false);
        setCantidad(1);
      }, 2000);
    }
  };

  const handleComprarAhora = (e) => {
    e.preventDefault();
    if (!producto) return;

    const itemAgregado = agregarItem({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: cantidad
    });

    if (itemAgregado) {
      setAgregado(true);
      setTimeout(() => {
        setAgregado(false);
        setCantidad(1);
        navigate('/carrito');
      }, 500);
    }
  };

  const handleFavorito = (e) => {
    e.preventDefault();
    if (!producto) return;
    toggleFavorito(producto.id);
  };

  if (!producto) return <div className="detalle-vacio">Producto no encontrado</div>;

  return (
    <div className="detalle-producto-container">
      <div className="detalle-producto-page">
        <div className="detalle-producto-img">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle-producto-info">
          <h1>{producto.nombre}</h1>
          <div className="detalle-precio">
            {producto.precioOriginal > producto.precio && (
              <span className="precio-original">
                {producto.precioOriginal.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}
              </span>
            )}
            <span className="precio">
              {producto.precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}
            </span>
          </div>
          <div className="detalle-rating">
            <RatingProducto ratingOficial={producto.rating} />
          </div>
          <div className="detalle-cantidad">
            Cantidad:
            <div className="detalle-cantidad-controles">
              <button 
                onClick={() => handleCantidad('restar')}
                disabled={cantidad <= 1}
              >
                -
              </button>
              <span>{cantidad}</span>
              <button 
                onClick={() => handleCantidad('sumar')}
                disabled={cantidad >= 9}
              >
                +
              </button>
            </div>
          </div>
          <button
            className={`detalle-btn-agregar${agregado ? ' agregado' : ''}`}
            onClick={agregarAlCarrito}
            disabled={agregado}
          >
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
      <Recomendaciones 
        productoActual={producto}
        historialNavegacion={historial}
      />
    </div>
  );
} 