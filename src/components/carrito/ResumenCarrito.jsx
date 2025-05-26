import React from 'react';
import './CarritoCompras.css';

const ResumenCarrito = ({ total, onVaciar, onPagar }) => (
  <div className="carrito-resumen">
    <div className="carrito-total">
      <span>Total:</span>
      <span>{total.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
    </div>
    <button className="btn-vaciar" onClick={onVaciar}>Vaciar carrito</button>
    <button className="btn-pagar" onClick={onPagar}>Proceder al Pago</button>
  </div>
);

export default ResumenCarrito; 