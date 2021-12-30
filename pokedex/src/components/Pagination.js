import React from 'react';
import pagination from '../icons/pagination.png';

export default function Pagination({
  onLimitChange,
  limit,
  onClickPreviousButton,
  onClickNextButton,
  enableOrDisableButtons,
  onChangePreviousButton,
}) {
  return (
    <div className='pagination'>
      <select
        name='paginates'
        id='paginates-select'
        value={limit}
        onChange={onLimitChange}
        className='pagination__select'
      >
        <option value='' className='pagination__select__options'>
          Todos os Pokemons
        </option>
        <option value='10' className='pagination__select__options'>
          10
        </option>
        <option value='25' className='pagination__select__options'>
          25
        </option>
        <option value='50' className='pagination__select__options'>
          50
        </option>
        <option value='100' className='pagination__select__options'>
          100
        </option>
      </select>
      <div className='pagination__pages'>
        <button
          type='button'
          onClick={onClickPreviousButton}
          disabled={onChangePreviousButton() || enableOrDisableButtons}
          className='pagination__pages__previous-button'
        >
          <img
            src={pagination}
            alt='previous-icon'
            className='pagination__pages__previous-button__img'
          />
        </button>
        <button
          type='button'
          onClick={onClickNextButton}
          disabled={enableOrDisableButtons}
          className='pagination__pages__next-button'
        >
          <img
            src={pagination}
            alt='next-icon'
            className='pagination__pages__next-button__img'
          />
        </button>
      </div>
    </div>
  );
}
