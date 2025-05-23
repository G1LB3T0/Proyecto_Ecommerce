import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import MainNav from './components/layout/MainNav';
import CartButton from './components/carrito/CartButton';
import Home from './paginas/Home';
import Productos from './paginas/Productos';
import DetalleProducto from './paginas/DetalleProducto';
import Categoria from './paginas/Categoria';
import Carrito from './paginas/Carrito';
import './App.css';

export default function App() {
  return (
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
            </Routes>
          </main>
          <CartButton />
        </div>
      </Router>
    </CarritoProvider>
  );
}