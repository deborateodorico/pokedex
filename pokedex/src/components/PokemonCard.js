import React from 'react';

export default function InputCheckbox({pokemon}) {
  return (
    <div>
      <div key={pokemon.id} className="pokemon">
        <img src={pokemon.picture} alt={pokemon.name} />
        <p>#{pokemon.id} {pokemon.name}</p>
      </div>
    </div>
  )
}
