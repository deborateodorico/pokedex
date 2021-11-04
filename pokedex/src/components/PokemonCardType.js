import React from 'react';
import colors from './colorsDictionary';

export default function PokemonCardType({pokemon}) {
  return (
    <div className="pokemon__type__wrapper">
      {pokemon.type.map((item) => {
        return <p key={item} className="pokemon__type__paragraph" style={{border: colors[item].borderPokemon}}>{item}</p>
      })}
    </div>
  )
}
