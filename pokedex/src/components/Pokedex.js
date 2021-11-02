import React from 'react';
import PokemonCard from './PokemonCard';

export default function Pokedex({pokemons}) {
	return (
    <div className="container">
      <div className="row">
        <section className="pokemon-list">
          {pokemons?.map((pokemon) => {
            return  (
              <div className="col-lg-2 col-md-3 col-sm-6">
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
              </div>
            );
          })}
        </section>
      </div>
    </div>
	);
}
