import React from 'react';
import { useRecomendaciones } from './hooks/useRecomendaciones';
import ListaProductos from '../listados/ListaProductos';
import './Recomendaciones.css';

const Recomendaciones = ({ productoActual, historialNavegacion }) => {
  const recomendaciones = useRecomendaciones(productoActual, historialNavegacion);

  if (recomendaciones.length === 0) return null;

  return (
    <div className="recomendaciones">
      <h3>Productos recomendados</h3>
      <ListaProductos productos={recomendaciones} />
    </div>
  );
};

export default Recomendaciones; 