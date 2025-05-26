import React from 'react';
import { productosMock } from '../../utils/productosMock';
import ListaProductos from '../listados/ListaProductos';
import './OfertasDestacadas.css';

const OfertasDestacadas = () => (
  <section className="home__ofertas">
    <h2 className="home__ofertas-titulo">Ofertas Especiales</h2>
    <ListaProductos productos={productosMock.filter(p => p.oferta)} />
  </section>
);

export default OfertasDestacadas; 