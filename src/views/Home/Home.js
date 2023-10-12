import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';

import PokemonList from './components/PokemonList/PokemonList';
import Loading from '../../components/loading/Loading';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import usePokemonStore from '../../zustand/stores/pokemons';

const Home = () => {

  //El getPokemon permite llamar la API
  const {getPokemon, pokemons, isLoading, hasError, errorMessage} = usePokemonStore(
      state => ({
        getPokemon: state.getPokemon,
        pokemons: state.pokemons,
        isLoading: state.isLoading, 
        hasError: state.hasError, 
        errorMessage: state.errorMessage
  }), shallow);
  
  //para utilizar un unico elemento del useStore se puede utilizar getState() para obetnerlo
  //const pokemons = usePokemonStore.getState().pokemons;

  useEffect( () =>{
    getPokemon().catch(null);
  },[] );

  return (
    <>
      <PokemonList pokemons={pokemons}/>
      {hasError && <ErrorMessage message={errorMessage}/>}
      {/* //Agregar un logo de cargue */}
      {isLoading && <Loading title='Cargando pokemons...' />}
    </>
  )
}

export default Home;