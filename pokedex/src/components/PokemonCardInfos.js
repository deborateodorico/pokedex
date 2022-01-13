import React from 'react';
import Plus from '../icons/plus.png';
import Heart from '../icons/heart.png';
import colors from './colorsDictionary';

export default function PokemonCardInfos({ pokemon }) {
  return (
    <div
      className='pokemon__infos'
      style={{ background: colors[pokemon.type[0]].background }}
    >
      <div className='pokemon__infos__wrapper'>
        <img src={Plus} alt='plus-img' className='pokemon__infos__plus-icon' />
        <img
          src={Heart}
          alt='heart-img'
          className='pokemon__infos__heart-icon'
        />
        <p className='pokemon__infos__id'>#{('0000' + pokemon.id).slice(-4)}</p>
      </div>
      <img
        className='pokemon__infos__img'
        src={pokemon.picture}
        alt={pokemon.name}
      />
      <p className='pokemon__infos__name'>{pokemon.name}</p>
    </div>
  );
}
