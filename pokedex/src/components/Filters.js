import React from 'react';
import InputCheckbox from './InputCheckbox';
import Types from './Types';
import Moves from './Moves';
import Abilities from './Abilities';
import closer from '../icons/closer.png';
import { connect } from 'react-redux';
import { CLEAR_ALL_FILTERS } from '../actions/actionsTypes';

function Filters({ clearAllFilters, onClickApplyButton, onCloseModal }) {
  return (
    <div className='filters'>
      <div className='filters__header'>
        <p className='filters__header__paragraph'>Filters</p>
        <button
          type='submit'
          onClick={onCloseModal}
          className='filters__header__closer-button'
        >
          <img
            src={closer}
            alt='closer-icon'
            className='filters__header__closer-button__img'
          />
        </button>
      </div>
      <InputCheckbox />
      <Types />
      <Moves />
      <Abilities />
      <div className='filters__buttons-section'>
        <button
          type='submit'
          onClick={clearAllFilters}
          className='filters__buttons-section__clear-button'
        >
          Clear filters
        </button>
        <button
          className='filters__buttons-section__search-button'
          type='submit'
          onClick={onClickApplyButton}
        >
          Show results
        </button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    clearAllFilters: () =>
      dispatch({
        type: CLEAR_ALL_FILTERS,
      }),
  };
}

export default connect(null, mapDispatchToProps)(Filters);
