import { useCartCalculations } from './hooks/useCartCalculations';
import { useNavigate } from 'react-router-dom';
import './CartButton.css';

const CartButton = () => {
  const { total, cantidadTotal, items } = useCartCalculations();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/carrito');
  };

  return (
    <div className="cart-button" onClick={handleCartClick}>
      <div className="cart-icon">
        🛒
        {items.length > 0 && (
          <span className="cart-count">{cantidadTotal}</span>
        )}
      </div>
      <div className="cart-total">
        {items.length > 0 ? (
          <span>{total.toLocaleString('es-GT', { style: 'currency', currency: 'GTQ' })}</span>
        ) : (
          <span>Carrito vacío</span>
        )}
      </div>
    </div>
  );
};

export default CartButton; 