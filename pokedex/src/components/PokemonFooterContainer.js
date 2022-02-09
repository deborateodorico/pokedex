import React from 'react';
import pagination from '../icons/pagination.png';
import barraFooter from '../icons/barraFooter.png';

function PokemonFooterContainer() {
  return (
    <footer className='footer-container'>
      <div className='footer-container__footer-left'>
        <button className='footer-container__footer-left__button'>
          <img
            src={pagination}
            alt='previous-icon'
            className='footer-container__footer-left__button__img'
          />
        </button>
        <div className='footer-container__footer-left__previous'>
          <p className='footer-container__footer-left__previous__id'>#0002</p>
          <p className='footer-container__footer-left__previous__name'>
            Venusaur
          </p>
        </div>
      </div>
      <div className='footer-container__bar'>
        <img
          src={barraFooter}
          alt='bar'
          className='footer-container__bar__img'
        />
      </div>
      <div className='footer-container__footer-right'>
        <div className='footer-container__footer-right__next'>
          <p className='footer-container__footer-right__next__id'>#0003</p>
          <p className='footer-container__footer-right__next__name'>
            Charmeleon
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
    </footer>
  );
}

export default PokemonFooterContainer;
