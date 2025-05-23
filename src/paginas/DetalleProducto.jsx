import React from 'react';
import ControlCantidad from '../components/controles/ControlCantidad';
import BotonComprar from '../components/botones/BotonComprar';
import EtiquetaOferta from '../components/etiquetas/EtiquetaOferta';

const DetalleProducto = ({ producto }) => (
  <div className="detalle-producto">
    <div className="galeria-imagenes">
      <img src={producto.imagen} alt={producto.nombre} />
    </div>
    <div className="info-producto">
      <h1>{producto.nombre}</h1>
      {producto.oferta && <EtiquetaOferta texto={producto.oferta} />}
      <div className="precios">
        {producto.precioOriginal && <del>{producto.precioOriginal} GTQ</del>}
        <span>{producto.precio} GTQ</span>
      </div>
      <ControlCantidad cantidad={1} onIncrementar={() => {}} onDecrementar={() => {}} />
      <BotonComprar onClick={() => {}} />
      <div className="descripcion">
        <p>{producto.descripcion}</p>
      </div>
    </div>
  </div>
);

export default DetalleProducto; 