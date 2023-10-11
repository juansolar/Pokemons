import React from 'react'
import PokemonListItem from './PokemonListItem/PokemonListItem';

export default function PokemonList({pokemons}){
    return (
        <div>
            {pokemons?.map( (value, index) => <PokemonListItem key={index} {...value}/> )}
        </div>
    );
}


