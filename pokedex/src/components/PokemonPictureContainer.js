import React from 'react';
import { Link } from 'react-router-dom';
import favorite from '../icons/favorite.png';
import colors from './colorsDictionary';
import pagination from '../icons/pagination.png';

function PokemonPictureContainer({ types, picture }) {
  const type = types[0] ? types[0].name : 'normal';

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
        <Link to='/'>
          <div className='details-container__pokemon__favorite-area__previous-page'>
            <img
              src={pagination}
              alt='previous-page'
              className='details-container__pokemon__favorite-area__previous-page__icon'
            />
          </div>
        </Link>

        <div className='details-container__pokemon__favorite-area__button-area'>
          <button className='details-container__pokemon__favorite-area__button-area__add-button'>
            + Add to team
          </button>
          <img
            src={favorite}
            alt='favorite'
            className='details-container__pokemon__favorite-area__button-area__icon'
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonPictureContainer;
