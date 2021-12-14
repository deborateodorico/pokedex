import React from 'react';

export default function Pagination({
  onLimitChange,
  limit,
  onClickPreviousButton,
  onClickNextButton,
  enableOrDisableButtons,
  onChangePreviousButton,
}) {
  return (
    <>
      <select
        name='paginates'
        id='paginates-select'
        value={limit}
        onChange={onLimitChange}
      >
        <option value=''>Todos os Pokemons</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <button
        type='button'
        onClick={onClickPreviousButton}
        disabled={onChangePreviousButton() || enableOrDisableButtons}
      >
        Previous Page
      </button>
      <button
        type='button'
        onClick={onClickNextButton}
        disabled={enableOrDisableButtons}
      >
        Next Page
      </button>
    </>
  );
}