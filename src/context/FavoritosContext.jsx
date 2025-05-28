import React, { createContext, useContext, useReducer, useEffect } from 'react';

const FavoritosContext = createContext();

const favoritosReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITO':
      const nuevoEstado = { ...state };
      const productoId = action.payload;
      const esFavorito = state.favoritos.includes(productoId);
      
      if (esFavorito) {
        nuevoEstado.favoritos = state.favoritos.filter(id => id !== productoId);
        nuevoEstado.historial = [
          {
            fecha: new Date().toISOString(),
            accion: 'Producto removido de favoritos'
          },
          ...state.historial
        ].slice(0, 5);
      } else {
        nuevoEstado.favoritos = [...state.favoritos, productoId];
        nuevoEstado.historial = [
          {
            fecha: new Date().toISOString(),
            accion: 'Producto agregado a favoritos'
          },
          ...state.historial
        ].slice(0, 5);
      }
      
      return nuevoEstado;
    case 'CARGAR_FAVORITOS':
      return {
        ...state,
        favoritos: action.payload
      };
    default:
      return state;
  }
};

export const FavoritosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritosReducer, {
    favoritos: [],
    historial: []
  });

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      dispatch({
        type: 'CARGAR_FAVORITOS',
        payload: JSON.parse(favoritosGuardados)
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
  }, [state.favoritos]);

  return (
    <FavoritosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos debe ser usado dentro de un FavoritosProvider');
  }

  const toggleFavorito = (id) => {
    context.dispatch({ type: 'TOGGLE_FAVORITO', payload: id });
  };

  const esFavorito = (id) => context.favoritos.includes(id);

  return {
    favoritos: context.favoritos,
    historial: context.historial,
    toggleFavorito,
    esFavorito
  };
}; 