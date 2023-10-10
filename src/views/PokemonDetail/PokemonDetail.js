import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PokemonContext from '../../context/pokemon/Context';

const PokemonDetail = () => {
    //Permite atrapar los parametros que vengan en la URL
    const {id} = useParams();
    const {getPokemonDetail, pokemon} = useContext(PokemonContext);

    useEffect( () =>{
        getPokemonDetail(id).catch(null);
    },[]);

    return (
        <div>PokemonDetail</div>
    )
}
export default PokemonDetail