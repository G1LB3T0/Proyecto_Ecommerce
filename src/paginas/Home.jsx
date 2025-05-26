import React from 'react';
import Banner from '../components/home/Banner';
import CategoriasGrid from '../components/home/CategoriasGrid';
import OfertasDestacadas from '../components/home/OfertasDestacadas';
import './Home.css';

const Home = () => (
  <main className="home">
    <Banner />
    <CategoriasGrid />
    <OfertasDestacadas />
  </main>
);

export default Home; 