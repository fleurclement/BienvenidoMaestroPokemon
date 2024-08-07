import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PokemonProvider } from './context/PokemonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PokemonProvider>
);
