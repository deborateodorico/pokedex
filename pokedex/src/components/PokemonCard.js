import React from 'react';

export default function InputCheckbox({pokemon}) {
  return (
    <div key={pokemon.id} className="pokemon">
      <div className="pokemon-infos">
        <p className="pokemon-id">#{pokemon.id}</p>
        <img src={pokemon.picture} alt={pokemon.name}/>
        <p className="pokemon-name">{pokemon.name}</p>
      </div>
      
      <div className="pokemon-type-wrapper">
        <p className="pokemon-type">{pokemon.type}</p>
      </div>
    </div>
  )
}
