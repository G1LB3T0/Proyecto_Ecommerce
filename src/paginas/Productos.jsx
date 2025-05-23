import React from 'react';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';

export default function Productos() {
  return (
    <main>
      <h1>Productos</h1>
      <ListaProductos productos={productosMock} />
    </main>
  );
}
