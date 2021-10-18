import React, { useEffect, useState } from 'react'

export default function Pokedex() {

  const POKEMON_API_ADDRESS = 'http://pokedex.jhonnymichel.com/pokemon';
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    const fetchApiPokemon = async () => {
      const apiPokemon = await fetch(POKEMON_API_ADDRESS);
      const json = await apiPokemon.json();
      setPokemons (json.results);
    }
    fetchApiPokemon();
  }, []);

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
