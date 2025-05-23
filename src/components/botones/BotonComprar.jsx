import React from 'react';

const BotonComprar = ({ texto = "Comprar", onClick, variante }) => (
  <button className={`boton-comprar ${variante || ""}`} onClick={onClick}>
    {texto}
  </button>
);

export default BotonComprar; 