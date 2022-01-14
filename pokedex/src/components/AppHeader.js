import React from 'react';
import union from '../icons/Union.png';
import vectorTeams from '../icons/vectorTeams.png';
import user from '../icons/user.png';
import favorite from '../icons/favorite.png';

export default function AppHeader() {
  return (
    <div className='app__header'>
      <div className='app__header__union-section'>
        <img
          src={union}
          alt='union-icon'
          className='app__header__union-section__img'
        />
        <p className='app__header__union-section__paragraph'>Pokedex</p>
      </div>
      <div className='app__header__teams-section'>
        <img
          src={vectorTeams}
          alt='teams-icon'
          className='app__header__teams-section__img'
        />
        <p className='app__header__teams-section__paragraph'>Teams</p>
      </div>
      <div className='app__header__favorite-section'>
        <img
          src={favorite}
          alt='heart-icon'
          className='app__header__favorite-section__img'
        />
        <p className='app__header__favorite-section__paragraph'>Favorite</p>
      </div>
      <div className='app__header__user-section'>
        <img
          src={user}
          alt='perfil-icon'
          className='app__header__user-section__img'
        />
        <p className='app__header__user-section__paragraph'>Sign in</p>
      </div>
    </div>
  );
}
