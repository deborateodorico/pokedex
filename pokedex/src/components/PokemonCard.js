import React from 'react';
import PokemonCardInfos from './PokemonCardInfos';
import colors from './colorsDictionary';
import PokemonCardType from './PokemonCardType';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div
        className='pokemon'
        style={{ border: colors[pokemon.type[0]].borderPokemon }}
      >
        <PokemonCardInfos pokemon={pokemon} />
        <PokemonCardType pokemon={pokemon} />
      </div>
    </Link>
  );
}
