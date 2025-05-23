import { useCarrito } from '../../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import './CartButton.css';

const CartButton = () => {
  const { state } = useCarrito();
  const navigate = useNavigate();

  const calcularTotal = () => {
    return state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  const handleCartClick = () => {
    navigate('/carrito');
  };

  return (
    <div className="cart-button" onClick={handleCartClick}>
      <div className="cart-icon">
        🛒
        {state.items.length > 0 && (
          <span className="cart-count">{state.items.length}</span>
        )}
      </div>
      <div className="cart-total">
        {state.items.length > 0 ? (
          <span>{calcularTotal().toFixed(2)} GTQ</span>
        ) : (
          <span>Carrito vacío</span>
        )}
      </div>
    </div>
  );
};

export default CartButton; 