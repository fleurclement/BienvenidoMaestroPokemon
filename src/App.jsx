import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import PokemonDetail from './components/PokemonesDetail';
import Navigation from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
};

export default App;
