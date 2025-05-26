import React, { createContext, useContext, useReducer, useEffect } from 'react';

const FavoritosContext = createContext();

const initialState = {
  favoritos: []
};

const favoritosReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITO':
      const existe = state.favoritos.includes(action.payload);
      if (existe) {
        return {
          ...state,
          favoritos: state.favoritos.filter(id => id !== action.payload)
        };
      }
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload]
      };
    
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
  const [state, dispatch] = useReducer(favoritosReducer, initialState);

  // Cargar favoritos del localStorage al iniciar
  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      dispatch({
        type: 'CARGAR_FAVORITOS',
        payload: JSON.parse(favoritosGuardados)
      });
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
  }, [state.favoritos]);

  const toggleFavorito = (id) => {
    dispatch({
      type: 'TOGGLE_FAVORITO',
      payload: id
    });
  };

  const esFavorito = (id) => {
    return state.favoritos.includes(id);
  };

  return (
    <FavoritosContext.Provider value={{ 
      favoritos: state.favoritos, 
      toggleFavorito, 
      esFavorito
    }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos debe ser usado dentro de un FavoritosProvider');
  }
  return context;
}; 