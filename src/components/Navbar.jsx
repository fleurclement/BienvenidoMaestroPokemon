import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navigation = () => {
    return (
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/pokemones" className={({ isActive }) => (isActive ? 'active' : '')}>Pokemones</NavLink>
      </nav>
    );
  };
  
  export default Navigation;