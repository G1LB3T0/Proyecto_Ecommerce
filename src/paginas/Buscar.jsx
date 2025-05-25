import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';
import './Buscar.css';

const Buscar = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const terminoBusqueda = decodeURIComponent(query || '').toLowerCase().trim();

  useEffect(() => {
    if (!terminoBusqueda && window.location.pathname === '/buscar') {
      navigate('/');
    }
  }, [terminoBusqueda, navigate]);

  const normalizeString = (str) => str.normalize('NFD').replace(/\p{Diacritic}/gu, '');

  const productosFiltrados = productosMock.filter(producto => 
    producto.nombre && normalizeString(producto.nombre.toLowerCase()).includes(normalizeString(terminoBusqueda))
  );

  return (
    <div className="buscar-page">
      <h1 className="buscar-titulo">
        Resultados para: "{terminoBusqueda}"
      </h1>
      {productosFiltrados.length > 0 ? (
        <>
          <p className="buscar-resultados">
            Se encontraron {productosFiltrados.length} productos
          </p>
          <ListaProductos productos={productosFiltrados} />
        </>
      ) : (
        <div className="buscar-vacio">
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          <p>Intenta con otros términos o revisa nuestras categorías.</p>
        </div>
      )}
    </div>
  );
};

export default Buscar; 