import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PokemonContext from '../../context/pokemon/Context';
import PokeStats from './components/pokeStats/PokeStats';

const PokemonDetail = () => {
    //Permite atrapar los parametros que vengan en la URL
    const {id} = useParams();
    const {getPokemonDetail, pokemon, isLoading} = useContext(PokemonContext);

    useEffect( () =>{
        getPokemonDetail(id).catch(null);
    },[]);

    if(isLoading){
        //Agregar un logo de cargue
        return <div>Esta cargando...</div>
    }

    return (
        <div>
            <p>Name: {pokemon?.name}</p>
            <p>Peso: {pokemon?.weight} kg</p>
            <p>Altura: {pokemon?.height} cm</p>
            <p>Experiencia: {pokemon?.base_experience}</p>
            <div>
                <h3>Habilidades</h3>
                <PokeStats stats={pokemon?.stats ?? []}/>
            </div>
        </div>
    )
}
export default PokemonDetail