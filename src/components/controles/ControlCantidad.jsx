import React from 'react';


const ControlCantidad = ({ cantidad, onIncrementar, onDecrementar }) => (
  <div className="control-cantidad">
    <button onClick={onDecrementar}>-</button>
    <span>{cantidad}</span>
    <button onClick={onIncrementar}>+</button>
  </div>
);

export default ControlCantidad; 