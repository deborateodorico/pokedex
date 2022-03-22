import React from 'react';
import vectorTeams from '../icons/vectorTeams.png';
import favorite from '../icons/favorite.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Union2 } from '../icons/union2.svg';
import { ReactComponent as User2 } from '../icons/user2.svg';

export default function AppHeader() {
  let activeClassName = 'link-without-underline';
  return (
    <div className='app__header'>
      <div className='container'>
        <NavLink
          to='/'
          className={({ isActive }) => {
            const defaultClass = 'iconClass';
            const activeClass = isActive ? activeClassName : '';
            return `${defaultClass} ${activeClass}`;
          }}
        >
          <div className='app__header__union-section'>
            <Union2 className='app__header__union-section__img' />
            <p className='app__header__union-section__paragraph'>Pokedex</p>
          </div>
        </NavLink>
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
          <NavLink
            to='/sign-in'
            className={({ isActive }) => {
              const defaultClass = 'iconClass';
              const activeClass = isActive ? activeClassName : '';

              return `${defaultClass} ${activeClass} userClass`;
            }}
          >
            <User2 className='app__header__user-section__img' />
            <p className='app__header__user-section__paragraph'>Sign in</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
