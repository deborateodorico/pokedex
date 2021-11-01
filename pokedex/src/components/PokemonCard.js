import React from 'react';
import Plus from '../icons/Plus.png';
import Heart from '../icons/Heart.png';
import colors from './colorsDictionary';

export default function PokemonCard({pokemon}) {
  return (
    <div key={pokemon.id} className="pokemon" style={{border: colors[pokemon.type[0]].borderPokemon}}>
      <div className="pokemon-infos" style={{background: colors[pokemon.type[0]].background }}>
        <img src={Plus} alt="plus-img" className="plus-icon" />
        <img src={Heart} alt="heart-img" className="heart-icon" />
        <p className="pokemon-id">#{("0000" + pokemon.id).slice(-4)}</p>
        <img src={pokemon.picture} alt={pokemon.name}/>
        <p className="pokemon-name">{pokemon.name}</p>
      </div>
      <div className="pokemon-type-wrapper">
        <div className="pokemon-type">{pokemon.type.map((item) => {
          return <p className="pokemon-type-paragraph" style={{border: colors[item].borderPokemon}}>{item}</p>
        })}</div>
      </div>
    </div>
  )
}
 