import React from 'react';
import PokemonCard from './PokemonCard';

export default function Pokedex({pokemons}) {
	return (
    <section className="pokemon-list">
      {pokemons?.map((pokemon) => {
        return  (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        );
      })}
    </section>
	);
}
