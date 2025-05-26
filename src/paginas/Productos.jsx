import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';
import './Productos.css';

export default function Productos() {
  const { favoritos } = useFavoritos();
  
  // Separar productos en favoritos y no favoritos
  const productosFavoritos = productosMock.filter(producto => favoritos.includes(producto.id));
  const productosNoFavoritos = productosMock.filter(producto => !favoritos.includes(producto.id));

  return (
    <div className="productos-page">
      <h1>Productos</h1>
      
      {productosFavoritos.length > 0 && (
        <section className="productos-favoritos">
          <h2>Mis Favoritos</h2>
          <ListaProductos productos={productosFavoritos} />
        </section>
      )}

      <section className="productos-todos">
        {productosFavoritos.length > 0 && <h2>Todos los Productos</h2>}
        <ListaProductos productos={productosNoFavoritos} />
      </section>
    </div>
  );
}
 