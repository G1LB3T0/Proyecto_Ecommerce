import React, { createContext, useContext, useReducer } from 'react';

const HistorialContext = createContext();

const historialReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_VISITA':
      return [
        action.payload,
        ...state.filter(item => item.id !== action.payload.id)
      ].slice(0, 10); // Mantener solo las últimas 10 visitas
    default:
      return state;
  }
};

export const HistorialProvider = ({ children }) => {
  const [historial, dispatch] = useReducer(historialReducer, []);

  return (
    <HistorialContext.Provider value={{ historial, dispatch }}>
      {children}
    </HistorialContext.Provider>
  );
};

export const useHistorial = () => {
  const context = useContext(HistorialContext);
  if (!context) {
    throw new Error('useHistorial debe ser usado dentro de un HistorialProvider');
  }
  return context;
}; 