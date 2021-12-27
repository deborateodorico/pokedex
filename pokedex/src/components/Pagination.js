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
    <div className='pagination-container'>
      <select
        name='paginates'
        id='paginates-select'
        value={limit}
        onChange={onLimitChange}
        className='pagination-select'
      >
        <option value='' className='select-options'>
          Todos os Pokemons
        </option>
        <option value='10' className='select-options'>
          10
        </option>
        <option value='25' className='select-options'>
          25
        </option>
        <option value='50' className='select-options'>
          50
        </option>
        <option value='100' className='select-options'>
          100
        </option>
      </select>
      <div className='pages-buttons-container'>
        <button
          type='button'
          onClick={onClickPreviousButton}
          disabled={onChangePreviousButton() || enableOrDisableButtons}
          className='previous-button'
        >
          <img src={pagination} alt='previous-icon' className='previous-img' />
        </button>
        <button
          type='button'
          onClick={onClickNextButton}
          disabled={enableOrDisableButtons}
          className='next-button'
        >
          <img src={pagination} alt='next-icon' className='next-img' />
        </button>
      </div>
    </div>
  );
}
