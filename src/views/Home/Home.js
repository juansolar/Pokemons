import React, { useEffect } from 'react';
//Permitira ir a buscar el contexto (Pokemon) y utilizarlo en este componente
import { useContext } from 'react';

import PokemonContext from '../../context/pokemon/Context';

const Home = () => {

  //El getPokemon permite llamar la API
  const {getPokemon, pokemons} = useContext(PokemonContext);
  
  useEffect( () =>{
    getPokemon().catch(null);
  },[] );

  console.log(pokemons);

  return (
    <div>Home</div>
  )
}

export default Home;