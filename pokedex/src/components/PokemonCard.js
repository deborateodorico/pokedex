import React from 'react';
import Plus from '../icons/Plus.png';
import Heart from '../icons/Heart.png';
import colors from './colorsDictionary';

export default function PokemonCard({pokemon}) {
  return (
    <div className="pokemon" style={{border: colors[pokemon.type[0]].borderPokemon}}>
      <div className="pokemon__infos" style={{background: colors[pokemon.type[0]].background }}>
        <img src={Plus} alt="plus-img" className="pokemon__infos__plus-icon" />
        <img src={Heart} alt="heart-img" className="pokemon__infos__heart-icon" />
        <p className="pokemon__infos__id">#{("0000" + pokemon.id).slice(-4)}</p>
        <img className="pokemon__infos__img"src={pokemon.picture} alt={pokemon.name}/>
        <p className="pokemon__infos__name">{pokemon.name}</p>
      </div>
      <div className="pokemon__type__wrapper">
        {pokemon.type.map((item) => {
          return <p key={pokemon.id} className="pokemon__type__paragraph" style={{border: colors[item].borderPokemon}}>{item}</p>
        })}
      </div>
    </div>
  )
}
 