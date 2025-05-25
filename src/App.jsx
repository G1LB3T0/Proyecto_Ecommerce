import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { FavoritosProvider } from './context/FavoritosContext';
import MainNav from './components/layout/MainNav';
import CartButton from './components/carrito/CartButton';
import Home from './paginas/Home';
import Productos from './paginas/Productos';
import DetalleProducto from './paginas/DetalleProducto';
import Categoria from './paginas/Categoria';
import Carrito from './paginas/Carrito';
import Buscar from './paginas/Buscar';
import Favoritos from './paginas/Favoritos';
import './App.css';

export default function App() {
  return (
    <FavoritosProvider>
      <CarritoProvider>
        <Router>
          <div className="app">
            <MainNav />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
                <Route path="/categoria/:id" element={<Categoria />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/buscar/:query" element={<Buscar />} />
                <Route path="/favoritos" element={<Favoritos />} />
              </Routes>
            </main>
            <CartButton />
          </div>
        </Router>
      </CarritoProvider>
    </FavoritosProvider>
  );
}