import React, { useState } from 'react';

import PokemonContext from './Context';
import ApiCall from '../../api/API';

export default function PokemonProvider({children}){

  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({})

  const getPokemon = async () => {
    try {
      const pokemonsResult = await ApiCall({url: ' https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'});
      setPokemons(pokemonsResult.results);
    } catch (error) {
      //Aqui caería el error en caso que caiga la llamda a la API
      setPokemons([]);
    }
  };

  const getPokemonDetail = async (id) =>{
    if(!id) Promise.reject("Indicar pokemon a analizar") ;
    try {
      const pokemonResult = await ApiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}/`});
      setPokemon(pokemonResult)
    } catch (error) {
      setPokemon({});
    }
  }

  return (
    <PokemonContext.Provider 
      value={{getPokemon, pokemons, getPokemonDetail, pokemon}}>
        {children}
    </PokemonContext.Provider>
  );
}