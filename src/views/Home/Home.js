import React, { useEffect } from 'react';
//Permitira ir a buscar el contexto (Pokemon) y utilizarlo en este componente
import { useContext } from 'react';

import PokemonContext from '../../context/pokemon/Context';
import PokemonList from './components/PokemonList/PokemonList';
import Loading from '../../components/loading/Loading';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

const Home = () => {

  //El getPokemon permite llamar la API
  const {getPokemon, pokemons, isLoading, hasError, errorMessage} = useContext(PokemonContext);
  
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