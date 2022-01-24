import React from 'react';
import pagination from '../icons/pagination.png';
import { connect } from 'react-redux';
import {
  INCREMENT_OFFSET_VALUE,
  DECREMENT_OFFSET_VALUE,
} from '../actions/actionsTypes';
import { changeLimit } from '../actions/index';

function Pagination({
  enableOrDisableButtons,
  limit,
  actions,
  incrementOffset,
  decrementOffset,
  offset,
}) {
  const onLimitChange = (e) => {
    const newValue = e.target.value;

    actions.changeLimit(newValue);
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
        <option value='12' className='pagination__select__options'>
          12
        </option>
        <option value='24' className='pagination__select__options'>
          24
        </option>
        <option value='48' className='pagination__select__options'>
          48
        </option>
        <option value='96' className='pagination__select__options'>
          96
        </option>
      </select>
      <div className='pagination__pages'>
        <button
          type='button'
          onClick={actions.decrementOffset}
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
          onClick={actions.incrementOffset}
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
    actions: {
      changeLimit: (newValue) => dispatch(changeLimit(newValue)),

      incrementOffset: () => dispatch({ type: INCREMENT_OFFSET_VALUE }),

      decrementOffset: () =>
        dispatch({
          type: DECREMENT_OFFSET_VALUE,
        }),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
