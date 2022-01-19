import React from 'react';
import pagination from '../icons/pagination.png';
import { connect } from 'react-redux';
import {
  INCREMENT_OFFSET_VALUE,
  DECREMENT_OFFSET_VALUE,
} from '../actions/actionsTypes';
import { limit } from '../actions/index';

function Pagination({
  enableOrDisableButtons,
  limit,
  changeLimit,
  incrementOffset,
  decrementOffset,
  offset,
}) {
  const onLimitChange = (e) => {
    const newValue = e.target.value;

    changeLimit(newValue);
  };

  const handleDisableButton = () => {
    return !offset;
  };

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
          onClick={decrementOffset}
          disabled={handleDisableButton() || enableOrDisableButtons}
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
          onClick={incrementOffset}
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

function mapStateToProps(state) {
  return {
    offset: state.formData.offset,
    limit: state.formData.limit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLimit: (newValue) => dispatch(limit(newValue)),

    incrementOffset: () => dispatch({ type: INCREMENT_OFFSET_VALUE }),

    decrementOffset: () =>
      dispatch({
        type: DECREMENT_OFFSET_VALUE,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
