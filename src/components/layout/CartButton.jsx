import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';
import './CartButton.css';

const CartButton = () => {
  const { state } = useCarrito();
  const itemCount = state.items.reduce((total, item) => total + item.cantidad, 0);

  return (
    <Link to="/carrito" className="cart-btn">
      <span className="cart-btn__icon">🛒</span>
      {itemCount > 0 && <span className="cart-btn__count">{itemCount}</span>}
    </Link>
  );
};

export default CartButton; 