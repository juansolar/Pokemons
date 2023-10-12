import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import usePokemonStore from '../../zustand/stores/pokemons';
import PokeStats from './components/pokeStats/PokeStats';
import Loading from '../../components/loading/Loading';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

const PokemonDetail = () => {
    //Permite atrapar los parametros que vengan en la URL
    const {id} = useParams();
    const {getPokemonDetail, pokemon, isLoading, hasError, errorMessage} = 
        usePokemonStore(state => ({
            getPokemonDetail: state.getPokemonDetail,
            pokemon: state.pokemon,
            isLoading: state.isLoading,
            hasError: state.hasError,
            errorMessage: state.errorMessage
        }));

    useEffect( () =>{
        getPokemonDetail(id).catch(null);
    },[]);

     //Agregar un logo de cargue
    if(isLoading)
        return <Loading title='Cargando pokemon...'/>

    return (
        <div>
            {hasError ? <ErrorMessage  message={errorMessage}/>: (
                <>
                    <p>Name: {pokemon?.name}</p>
                    <p>Peso: {pokemon?.weight} kg</p>
                    <p>Altura: {pokemon?.height} cm</p>
                    <p>Experiencia: {pokemon?.base_experience}</p>
                    <div>
                        <h3>Habilidades</h3>
                        <PokeStats stats={pokemon?.stats ?? []}/>
                    </div>
                </>
            )}
        </div>
    )
}
export default PokemonDetail