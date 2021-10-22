import React from 'react';

export default function Pokedex({pokemons}) {

	return (
    <div>
      <section className="pokemon-list">
        {pokemons.map((pokemon) => {
          return  (
            <div key={pokemon.id} className="pokemon">
              <img src={pokemon.picture} alt={pokemon.name} />
              <p>#{pokemon.id} {pokemon.name}</p>
            </div>
          );
        })}
      </section>
    </div>
	);
}
