import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToPokemones = () => {
    navigate('/pokemones');
  };

  return (
    <div className="home">
      <h1>Bienvenido maestro pokémon</h1>
      <img src='https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png' alt="Pikachu" />
    </div>
  );
};

export default Home;
