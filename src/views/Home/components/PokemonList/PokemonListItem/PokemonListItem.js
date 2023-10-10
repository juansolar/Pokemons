import React from 'react'
import { Link } from 'react-router-dom'

const PokemonListItem = ({name, url}) => {
  
  const getId = () => url.split('/')[6];
  return (
    <div>
        <p>{name}</p>
        <button> 
          <Link to={`/pokemon/${getId()}`}>Ver detalle</Link>
        </button>
    </div>
  )
}

export default PokemonListItem