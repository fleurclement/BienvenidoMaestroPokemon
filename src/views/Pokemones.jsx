import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

const Pokemones = () => {
    const { pokemons } = useContext(PokemonContext);
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setSelectedPokemon(event.target.value);
    };
  
    const handleViewDetails = () => {
      if (selectedPokemon) {
        navigate(`/pokemones/${selectedPokemon}`);
      }
    };
  
    return (
      <div className="pokemones">
        <h1>Selecciona un pokémon</h1>
        <select onChange={handleChange} value={selectedPokemon}>
          <option value="">Pokemones</option>
          {pokemons.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={handleViewDetails}>Ver Detalle</button>
      </div>
    );
  };
  
  export default Pokemones;