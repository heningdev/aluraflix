import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { GiFilmProjector } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <GiFilmProjector color='#C80036' size={30} />
        <p>Alura<span>Flix</span></p>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/novo-video" className={({ isActive }) => (isActive ? 'active' : '')}>
          Novo Vídeo
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
