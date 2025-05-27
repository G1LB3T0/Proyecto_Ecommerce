export const LIMITE_COMPRA = 8000;

export const validarLimiteCompra = (total) => {
  if (total > LIMITE_COMPRA) {
    alert(`El total no puede exceder Q${LIMITE_COMPRA.toLocaleString()}`);
    return false;
  }
  return true;
}; 