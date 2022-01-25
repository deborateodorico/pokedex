import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import AppHeader from './AppHeader';

export default function PokemonDetails() {
  const params = useParams();

  const [pokemonDetailRequest, setPokemonDetailRequest] = useState({
    name: '',
    id: 0,
    picture: '',
    types: '',
    abilities: [],
    height: 0,
    weight: 0,
  });

  let apiPokemonDetails = `${process.env.REACT_APP_POKEMON_API_ADDRESS}/${params.name}`;
  console.log(apiPokemonDetails);

  return (
    <div>
      <AppHeader />
      <h2>{params.name}</h2>
    </div>
  );
}
