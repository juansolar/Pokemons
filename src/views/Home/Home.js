import React, { useEffect } from 'react';
//Permitira ir a buscar el contexto (Pokemon) y utilizarlo en este componente
import { useContext } from 'react';

import PokemonContext from '../../context/pokemon/Context';
import PokemonList from './components/PokemonList/PokemonList';

const Home = () => {

  //El getPokemon permite llamar la API
  const {getPokemon, pokemons, isLoading} = useContext(PokemonContext);
  
  useEffect( () =>{
    getPokemon().catch(null);
  },[] );

  if(isLoading){
    //Agregar un logo de cargue
    return <div>Esta cargando...</div>
}
  
  return (
    <>
      <PokemonList pokemons={pokemons}/>
    </>
  )
}

export default Home;