import { useState } from 'react';
import { useCarrito } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useFavoritos } from '../../context/FavoritosContext';
import './TarjetaProducto.css';

const BotonFavorito = ({ esFavorito, onClick, totalFavoritos }) => (
  <div className="favoritos-container">
    <button
      className={`boton-favorito${esFavorito ? ' activo' : ''}`}
      onClick={onClick}
      aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </button>
    {totalFavoritos > 0 && <span className="contador-favoritos">{totalFavoritos}</span>}
  </div>
);

const TarjetaProducto = ({ producto }) => {
  const { dispatch } = useCarrito();
  const { toggleFavorito, esFavorito, favoritos } = useFavoritos();
  const [agregado, setAgregado] = useState(false);
  const { id, nombre, imagen, precio, precioOriginal, oferta, rating } = producto;
  
  const agregarAlCarrito = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'AGREGAR_ITEM', payload: { id, nombre, precio, imagen, cantidad: 1 } });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  const handleFavorito = e => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorito(id);
  };

  const mostrarOferta = oferta?.trim() || (precioOriginal > precio ? 'Oferta' : null);
  const ratingEstrellas = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <Link to={`/producto/${id}`} className="tarjeta-producto-link">
      <div className="tarjeta-producto">
        {mostrarOferta && <span className="etiqueta-oferta">{mostrarOferta}</span>}
        <BotonFavorito 
          esFavorito={esFavorito(id)} 
          onClick={handleFavorito}
          totalFavoritos={favoritos.length}
        />
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <div className="rating"><span>{ratingEstrellas}</span></div>
        <div className="precios">
          {precioOriginal > precio && (
            <del>{precioOriginal.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</del>
          )}
          <span>{precio.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
        </div>
        <div className="tarjeta-producto__botones">
          <button className={`boton-comprar${agregado ? ' agregado' : ''}`} onClick={agregarAlCarrito}>
            {agregado ? '¡Agregado!' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TarjetaProducto;
