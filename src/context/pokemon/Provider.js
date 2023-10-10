import React, { useState } from 'react';

import PokemonContext from './Context';
import ApiCall from '../../api/API';

export default function PokemonProvider({children}){
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    try {
      const pokemonsResult = await ApiCall({url: ' https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'});
      setPokemons(pokemonsResult.results);
    } catch (error) {
      //Aqui caería el error en caso que caiga la llamda a la API
      setPokemons([]);
    }
  };

  return (
    <PokemonContext.Provider value={{getPokemon, pokemons}}>
        {children}
    </PokemonContext.Provider>
  );
}