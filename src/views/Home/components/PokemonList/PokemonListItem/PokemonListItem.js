import React from 'react'

const PokemonListItem = ({name, url}) => {
  return (
    <div>
        <p>{name}</p>
        <button>Ver detalle</button>
    </div>
  )
}

export default PokemonListItem