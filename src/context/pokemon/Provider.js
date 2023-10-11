import React, { useState } from 'react';

import PokemonContext from './Context';
import ApiCall from '../../api/API';

export default function PokemonProvider({children}){

  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const getPokemon = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      // throw new Error("Hey!");
      const pokemonsResult = await ApiCall({url: ' https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'});
      setPokemons(pokemonsResult.results);
    } catch (error) {
      //Aqui caería el error en caso que caiga la llamda a la API
      setPokemons([]);
      setHasError(true);
      setErrorMessage("Nuestros pokemones están un poco timidos, intentalo más tarde");
    }finally{
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) =>{
    if(!id) Promise.reject("Indicar pokemon a analizar") ;
    try {
      setIsLoading(true);
      setHasError(false);
      // throw new Error("Hey!");
      const pokemonResult = await ApiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}/`});
      setPokemon(pokemonResult)
    } catch (error) {
      setPokemon({});
      setHasError(true);
      setErrorMessage('El pokemon no quiso salir de la pokebola, intentalo más tarde');
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <PokemonContext.Provider 
      value={{getPokemon, pokemons, getPokemonDetail, pokemon, isLoading,
              hasError, errorMessage}}>
        {children}
    </PokemonContext.Provider>
  );
}