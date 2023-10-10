import React, { createContext } from "react";

const PokemonContext = createContext("pokemons");

export default PokemonContext;

//Aqui se crea el contexto para que el provider lo utilice