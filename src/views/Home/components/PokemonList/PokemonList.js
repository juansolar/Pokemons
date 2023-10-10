import React from 'react'
import PokemonListItem from './PokemonListItem/PokemonListItem';

export default function PokemonList({pokemons}){
    console.log(pokemons.length);
    console.log(pokemons)
    return (
        <div>
            {!pokemons.length && <p>No hay nada</p>}
            {pokemons?.map( (value, index) => <PokemonListItem key={index} {...value}/> )}
        </div>
    );
}

