import React from 'react';
import favorite from '../icons/favorite.png';
import colors from './colorsDictionary';

function PokemonPictureContainer({ types, picture }) {
  const type = types[0] ? types[0].type.name : 'normal';

  return (
    <div
      className='details-container__pokemon'
      style={{
        background: colors[type].background,
      }}
    >
      <img
        src={picture}
        alt='pokemon'
        className='details-container__pokemon__img'
      />
      <div className='details-container__pokemon__favorite-area'>
        <button className='details-container__pokemon__favorite-area__add-button'>
          + Add to team
        </button>
        <img
          src={favorite}
          alt='favorite'
          className='details-container__pokemon__favorite-area__icon'
        />
      </div>
    </div>
  );
}

export default PokemonPictureContainer;
