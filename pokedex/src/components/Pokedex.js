import React from 'react';
import PokemonCard from './PokemonCard';

export default function Pokedex({pokemons}) {
	return (
    <div>
      <section className="pokemon-list">
        {pokemons?.map((pokemon) => {
          return  (
            <PokemonCard pokemon={pokemon}/>
          );
        })}
      </section>
    </div>
	);
}
