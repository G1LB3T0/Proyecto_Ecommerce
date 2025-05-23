import { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

const initialState = {
  items: [],
  total: 0
};

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_ITEM':
      const itemExistente = state.items.find(item => item.id === action.payload.id);
      
      if (itemExistente) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, cantidad: 1 }]
      };

    case 'ACTUALIZAR_CANTIDAD':
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
      return initialState;

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