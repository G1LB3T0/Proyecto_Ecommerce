import { useRef } from 'react';

export default function useFavoritos() {
  const favoritos = useRef([]);
  const agregar = id => {
    if (!favoritos.current.includes(id)) favoritos.current.push(id);
  };
  const quitar = id => {
    favoritos.current = favoritos.current.filter(f => f !== id);
  };
  return { favoritos, agregar, quitar };
} 