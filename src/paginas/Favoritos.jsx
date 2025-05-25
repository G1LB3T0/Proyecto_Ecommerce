import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import productosMock from '../utils/productosMock';
import ListaProductos from '../components/listados/ListaProductos';
import './Favoritos.css';

const Favoritos = () => {
  const { favoritos } = useFavoritos();
  const productosFavoritos = productosMock.filter(producto => favoritos.includes(producto.id));

  return (
    <div className="favoritos-page">
      <h1>Mis Favoritos</h1>
      {productosFavoritos.length > 0 ? (
        <ListaProductos productos={productosFavoritos} />
      ) : (
        <div className="favoritos-vacio">
          <p>No tienes productos favoritos aún.</p>
          <p>¡Explora nuestra tienda y agrega tus productos favoritos!</p>
        </div>
      )}
    </div>
  );
};

export default Favoritos; 