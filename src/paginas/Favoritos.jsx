import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';
import './Favoritos.css';

export default function Favoritos() {
  const { favoritos } = useFavoritos();
  
  // Filtrar productos favoritos
  const productosFavoritos = productosMock.filter(producto => favoritos.includes(producto.id));

  return (
    <div className="favoritos-page">
      <h1>Mis Favoritos</h1>
      
      {productosFavoritos.length > 0 ? (
        <ListaProductos productos={productosFavoritos} />
      ) : (
        <div className="favoritos-vacio">
          <p>No tienes productos favoritos aún.</p>
          <p>¡Explora nuestros productos y agrega tus favoritos!</p>
        </div>
      )}
    </div>
  );
} 