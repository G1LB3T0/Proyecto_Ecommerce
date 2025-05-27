import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistorial } from '../../context/HistorialContext';
import productosMock from '../../utils/productosMock';
import Recomendaciones from './Recomendaciones';
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const { historial, dispatch } = useHistorial();
  const producto = productosMock.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (producto) {
      dispatch({ type: 'AGREGAR_VISITA', payload: producto });
    }
  }, [producto, dispatch]);

  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <div className="detalle-producto">
      <div className="producto-info">
        <h2>{producto.nombre}</h2>
        <p className="precio">Q{producto.precio.toLocaleString()}</p>
        <p className="descripcion">{producto.descripcion}</p>
      </div>
      <Recomendaciones 
        productoActual={producto}
        historialNavegacion={historial}
      />
    </div>
  );
};

export default DetalleProducto; 