import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';
import './Favoritos.css';

export default function Favoritos() {
  const { favoritos } = useFavoritos();
  
  // Filtrar los productos que están en favoritos
  const productosFavoritos = productosMock.filter(producto => 
    favoritos.includes(producto.id)
  );

  return (
    <div className="favoritos">
      <h1 className="favoritos__titulo">Mis Favoritos</h1>
      
      {productosFavoritos.length > 0 ? (
        <ListaProductos productos={productosFavoritos} />
      ) : (
        <div className="favoritos__vacio">
          <h2>No tienes productos favoritos aún</h2>
          <p>Agrega productos a tus favoritos haciendo clic en el corazón ♥</p>
        </div>
      )}
    </div>
  );
} 