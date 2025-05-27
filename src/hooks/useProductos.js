import { useState, useEffect } from 'react';
import { productosMock } from '../utils/productosMock';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        // Simulamos una carga asíncrona
        await new Promise(resolve => setTimeout(resolve, 500));
        setProductos(productosMock);
        setCargando(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  return {
    productos,
    cargando,
    error
  };
}; 