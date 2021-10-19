import React, { useEffect, useState } from 'react'

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    const fetchApiPokemon = async () => {
      const apiPokemonResponse = await fetch(process.env.REACT_APP_POKEMON_API_ADDRESS);
      const pokemonData = await apiPokemonResponse.json();
      setPokemons (pokemonData.results);
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
