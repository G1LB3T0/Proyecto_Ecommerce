import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useFavoritos } from '../context/FavoritosContext';
import RatingProducto from '../components/producto/RatingProducto';
import productosMock from '../utils/productosMock';
import './DetalleProducto.css';

const LIMITE_COMPRA = 7000;

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useCarrito();
  const { toggleFavorito, esFavorito } = useFavoritos();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    const productoEncontrado = productosMock.find(p => p.id === parseInt(id));
    if (productoEncontrado) {
      setProducto({
        ...productoEncontrado,
        precio: parseFloat(productoEncontrado.precio) || 0,
        precioOriginal: parseFloat(productoEncontrado.precioOriginal) || 0,
        rating: parseFloat(productoEncontrado.rating) || 0,
        stock: parseInt(productoEncontrado.stock) || 10
      });
    }
  }, [id]);

  const handleCantidad = (operacion) => {
    if (!producto) return;
    
    setCantidad(prevCantidad => {
      const nuevaCantidad = operacion === 'sumar' 
        ? prevCantidad + 1 
        : prevCantidad - 1;
      
      // Asegurarse de que la cantidad esté entre 1 y el stock disponible
      return Math.min(Math.max(1, nuevaCantidad), producto.stock || 10);
    });
  };

  const agregarAlCarrito = (e) => {
    e.preventDefault();
    if (!producto) return;

    const precio = parseFloat(producto.precio) || 0;
    const cantidadActual = parseInt(cantidad) || 1;
    const total = precio * cantidadActual;

    if (total > LIMITE_COMPRA) {
      alert(`El total no puede exceder Q${LIMITE_COMPRA.toLocaleString()}`);
      return;
    }

    dispatch({
      type: 'AGREGAR_ITEM',
      payload: {
        id: producto.id,
        nombre: producto.nombre,
        precio: precio,
        imagen: producto.imagen,
        cantidad: cantidadActual
      }
    });
    setAgregado(true);
    setTimeout(() => {
      setAgregado(false);
      setCantidad(1);
    }, 2000);
  };

  const handleComprarAhora = (e) => {
    e.preventDefault();
    agregarAlCarrito(e);
    setTimeout(() => navigate('/carrito'), 500);
  };

  const handleFavorito = (e) => {
    e.preventDefault();
    if (!producto) return;
    toggleFavorito(producto.id);
  };

  if (!producto) return <div className="detalle-vacio">Producto no encontrado</div>;

  return (
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
              disabled={cantidad >= (producto.stock || 10)}
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
  );
} 