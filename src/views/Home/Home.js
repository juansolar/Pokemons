import React from 'react';
//Permitira ir a buscar el contexto (Pokemon) y utilizarlo en este componente
import { useContext } from 'react';

import PokemonContext from '../../context/pokemon/Context';

const Home = () => {

  const myContext = useContext(PokemonContext);
  
  console.log(myContext);

  return (
    <div>Home</div>
  )
}

export default Home;