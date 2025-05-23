import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from './CartButton';

const links = [
  { to: '/', label: 'INICIO' },
  { to: '/categoria/cover-duvets', label: 'Cover Duvets' },
  { to: '/categoria/lampara-velas', label: 'Lámpara de velas' },
  { to: '/categoria/alfombras', label: 'Alfombras lavables' },
  { to: '/categoria/vajillas', label: 'Vajillas' },
  { to: '/categoria/accesorios', label: 'Accesorios' },
  { to: '/categoria/cubiertos', label: 'Cubiertos' },
  { to: '/categoria/lamparas', label: 'Lámparas' },
  { to: '/categoria/lentes', label: 'Lentes' },
  { to: '/categoria/gorras', label: 'Gorras' },
  { to: '/categoria/liquidaciones', label: 'LIQUIDACIONES', sale: true },
];

const MainNav = () => (
  <nav className="main-nav">
    <ul className="main-nav__list">
      {links.map(link => (
        <li key={link.to} className={`main-nav__item${link.sale ? ' main-nav__item--sale' : ''}`}>
          <NavLink
            to={link.to}
            className={({ isActive }) => isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="main-nav__actions">
      {}
      {}
      {}
    </div>
  </nav>
);

export default MainNav; 