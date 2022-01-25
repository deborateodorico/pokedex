import { useParams } from 'react-router-dom';
import React from 'react';
import AppHeader from './AppHeader';

export default function PokemonDetails() {
  const params = useParams();

  let apiPokemonDetails = `${process.env.REACT_APP_POKEMON_API_ADDRESS}/${params.name}`;
  console.log(apiPokemonDetails);

  return (
    <div>
      <AppHeader />
      <h2>{params.name}</h2>
    </div>
  );
}
