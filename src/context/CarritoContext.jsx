import { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

const initialState = {
  items: [],
  total: 0
};

const MAX_CANTIDAD_POR_PRODUCTO = 9;

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_ITEM':
      const itemExistente = state.items.find(item => item.id === action.payload.id);
      
      if (itemExistente) {
        const nuevaCantidad = itemExistente.cantidad + action.payload.cantidad;
        if (nuevaCantidad > MAX_CANTIDAD_POR_PRODUCTO) {
          alert(`No puedes agregar más de ${MAX_CANTIDAD_POR_PRODUCTO} unidades del mismo producto`);
          return state;
        }
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, cantidad: nuevaCantidad }
              : item
          )
        };
      }
      
      if (action.payload.cantidad > MAX_CANTIDAD_POR_PRODUCTO) {
        alert(`No puedes agregar más de ${MAX_CANTIDAD_POR_PRODUCTO} unidades del mismo producto`);
        return state;
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case 'ACTUALIZAR_CANTIDAD':
      if (action.payload.cantidad > MAX_CANTIDAD_POR_PRODUCTO) {
        alert(`No puedes agregar más de ${MAX_CANTIDAD_POR_PRODUCTO} unidades del mismo producto`);
        return state;
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: action.payload.cantidad }
            : item
        )
      };

    case 'ELIMINAR_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'VACIAR_CARRITO':
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  return (
    <CarritoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
}; 