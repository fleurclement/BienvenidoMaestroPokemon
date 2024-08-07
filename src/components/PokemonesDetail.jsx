import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

const PokemonDetail = () => {
  const { name } = useParams();
  const { pokemons } = useContext(PokemonContext);
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemonDetail(data);
    };

    fetchPokemonDetail();
  }, [name]);

  return (
    <div className="pokemon-detail">
      <h1>Pokemon Detail: {name}</h1>
      {pokemonDetail ? (
        <div>
          <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
          <p>HP: {pokemonDetail.stats[0].base_stat}</p>
          <p>Attack: {pokemonDetail.stats[1].base_stat}</p>
          <p>Defense: {pokemonDetail.stats[2].base_stat}</p>
          <p>Special Attack: {pokemonDetail.stats[3].base_stat}</p>
          <p>Special Defense: {pokemonDetail.stats[4].base_stat}</p>
          <p>Speed: {pokemonDetail.stats[5].base_stat}</p>
          <p>Type: {pokemonDetail.types.map(type => type.type.name).join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetail;
