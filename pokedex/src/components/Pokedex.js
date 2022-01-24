import React from 'react';
import PokemonCard from './PokemonCard';

export default function Pokedex({ pokemons }) {
  return (
    <div className='container pokemon-list'>
      <div className='row g-3 g-lg-4 g-xl-3 g-xxl-4'>
        {pokemons?.map((pokemon) => {
          return (
            <div key={pokemon.id} className='col-lg-2 col-md-3 col-6'>
              <PokemonCard pokemon={pokemon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
