import React from 'react';
import favorite from '../../icons/favorite.png';

function DetailsInfoName({ id, name }) {
  return (
    <div className='details-container__informations__details'>
      <div className='details-container__informations__details__name-area'>
        <h1 className='details-container__informations__details__name-area__name'>
          {name}
        </h1>
        <p className='details-container__informations__details__name-area__id'>
          #{('0000' + id).slice(-4)}
        </p>
      </div>
      <div className='details-container__informations__details__favorite-area'>
        <button className='details-container__informations__details__favorite-area__add-button'>
          + Add to team
        </button>
        <img
          src={favorite}
          alt='favorite'
          className='details-container__informations__details__favorite-area__icon'
        />
      </div>
    </div>
  );
}

export default DetailsInfoName;
