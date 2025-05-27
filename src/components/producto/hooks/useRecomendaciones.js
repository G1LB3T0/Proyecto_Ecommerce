import { useMemo } from 'react';
import productosMock from '../../../utils/productosMock';

export const useRecomendaciones = (productoActual, historialNavegacion = []) => {
  const recomendaciones = useMemo(() => {
    // Si no hay historial, devolver productos aleatorios
    if (historialNavegacion.length === 0) {
      return productosMock
        .filter(p => p.id !== productoActual?.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
    }

    // Obtener categorías más visitadas
    const categoriasVisitadas = historialNavegacion.reduce((acc, producto) => {
      acc[producto.categoria] = (acc[producto.categoria] || 0) + 1;
      return acc;
    }, {});

    // Ordenar categorías por frecuencia
    const categoriasOrdenadas = Object.entries(categoriasVisitadas)
      .sort(([, a], [, b]) => b - a)
      .map(([categoria]) => categoria);

    // Filtrar productos por categorías más visitadas
    return productosMock
      .filter(p => 
        p.id !== productoActual?.id && 
        categoriasOrdenadas.includes(p.categoria)
      )
      .sort((a, b) => {
        const indexA = categoriasOrdenadas.indexOf(a.categoria);
        const indexB = categoriasOrdenadas.indexOf(b.categoria);
        return indexA - indexB;
      })
      .slice(0, 4);
  }, [productoActual, historialNavegacion]);

  return recomendaciones;
}; 