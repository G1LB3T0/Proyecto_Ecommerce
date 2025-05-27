import { useState } from 'react';
import { useCarritoActions } from '../carrito/hooks/useCarritoActions';
import { Link } from 'react-router-dom';
import { useFavoritos } from '../../context/FavoritosContext';
import BotonFavorito from './BotonFavorito';
import InfoProducto from './InfoProducto';
import './TarjetaProducto.css';

const TarjetaProducto = ({ producto }) => {
  const { agregarItem } = useCarritoActions();
  const { toggleFavorito, esFavorito, favoritos, historial } = useFavoritos();
  const [agregado, setAgregado] = useState(false);
  const { id, nombre, imagen, precio, precioOriginal, oferta, rating } = producto;
  
  const agregarAlCarrito = e => {
    e.preventDefault();
    e.stopPropagation();
    const itemAgregado = agregarItem({ id, nombre, precio, imagen, cantidad: 1 });
    if (itemAgregado) {
      setAgregado(true);
      setTimeout(() => setAgregado(false), 2000);
    }
  };

  const handleFavorito = e => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorito(id);
  };

  const mostrarOferta = oferta?.trim() || (precioOriginal > precio ? 'Oferta' : null);

  return (
    <Link to={`/producto/${id}`} className="tarjeta-producto-link">
      <div className="tarjeta-producto">
        {mostrarOferta && <span className="etiqueta-oferta">{mostrarOferta}</span>}
        <BotonFavorito 
          esFavorito={esFavorito(id)} 
          onClick={handleFavorito}
          totalFavoritos={favoritos.length}
          historial={historial}
        />
        <img src={imagen} alt={nombre} />
        <InfoProducto 
          nombre={nombre}
          precio={precio}
          precioOriginal={precioOriginal}
          rating={rating}
        />
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
