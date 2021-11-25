import React from 'react';
import InputCheckbox from './InputCheckbox';
import Types from './Types';

export default function Modal({
  searchInputvalue,
  search,
  weights,
  heights,
  onCheckboxWeightsChange,
  onCheckboxHeightsChange,
  onTypeChange,
  selectedTypes,
  onSelectType,
  onClearAllFilters,
  onClickFunctions,
  onCloseModal,
}) {
  return (
    <div>
      <label>
        <input
          type='text'
          className='input-search'
          name='input-search'
          value={search}
          onChange={searchInputvalue}
          placeholder='Search...'
        />
      </label>
      <InputCheckbox
        weights={weights}
        heights={heights}
        onCheckboxWeightsChange={onCheckboxWeightsChange}
        onCheckboxHeightsChange={onCheckboxHeightsChange}
      />
      <Types
        onTypeChange={onTypeChange}
        selectedTypes={selectedTypes}
        onSelectType={onSelectType}
      />
      <button type='submit' onClick={onClearAllFilters}>
        Reset
      </button>
      <button
        className='button-search'
        type='submit'
        onClick={onClickFunctions}
      >
        Apply
      </button>
      <button type='submit' onClick={onCloseModal}>
        Back
      </button>
    </div>
  );
}
