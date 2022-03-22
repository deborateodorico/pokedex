import React from 'react';
import pagination from '../icons/pagination.png';
import barraFooter from '../icons/barraFooter.png';
import { Link } from 'react-router-dom';

function PokemonFooterContainer({ prevPokemon, nextPokemon }) {
  return (
    <footer className='footer-container'>
      <Link to={`/pokemon/${prevPokemon.name}`} className='link-footer'>
        <div className='footer-container__footer-left'>
          <button className='footer-container__footer-left__button'>
            <img
              src={pagination}
              alt='previous-icon'
              className='footer-container__footer-left__button__img'
            />
          </button>
          <div className='footer-container__footer-left__previous'>
            <p className='footer-container__footer-left__previous__id'>
              #{('0000' + prevPokemon.id).slice(-4)}
            </p>
            <p className='footer-container__footer-left__previous__name'>
              {prevPokemon.name}
            </p>
          </div>
        </div>
      </Link>
      <div className='footer-container__bar'>
        <img
          src={barraFooter}
          alt='bar'
          className='footer-container__bar__img'
        />
      </div>
      <Link to={`/pokemon/${nextPokemon.name}`} className='link-footer'>
        <div className='footer-container__footer-right'>
          <div className='footer-container__footer-right__next'>
            <p className='footer-container__footer-right__next__id'>
              #{('0000' + nextPokemon.id).slice(-4)}
            </p>
            <p className='footer-container__footer-right__next__name'>
              {nextPokemon.name}
            </p>
          </div>
          <button className='footer-container__footer-right__button'>
            <img
              src={pagination}
              alt='previous-icon'
              className='footer-container__footer-right__button__img'
            />
          </button>
        </div>
      </Link>
    </footer>
  );
}

export default PokemonFooterContainer;
