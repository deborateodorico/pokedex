import React from 'react';
import PokemonCardInfos from './PokemonCardInfos';
import colors from './colorsDictionary';
import PokemonCardType from './PokemonCardType';

export default function PokemonCard({pokemon}) {
  return (
    <div className="pokemon" style={{border: colors[pokemon.type[0]].borderPokemon}}>
      <PokemonCardInfos pokemon={pokemon} />
      <PokemonCardType pokemon={pokemon} />
    </div>
  )
}
 