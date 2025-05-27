import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useBusqueda = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (location.pathname.startsWith('/producto/')) {
      setBusqueda('');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (busqueda.trim() === '') return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      navigate(`/buscar/${encodeURIComponent(busqueda.trim())}`);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [busqueda, navigate]);

  return { busqueda, setBusqueda };
}; 