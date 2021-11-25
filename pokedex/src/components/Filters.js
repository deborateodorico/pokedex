import React from 'react';
import InputCheckbox from './InputCheckbox';
import Types from './Types';
import Moves from './Moves';

export default function Filters({
  searchInputvalue,
  search,
  selectedWeights,
  selectedHeights,
  onCheckboxWeightsChange,
  onCheckboxHeightsChange,
  onTypeChange,
  selectedTypes,
  onSelectType,
  onClearAllFilters,
  onClickApplyButton,
  onCloseModal,
  moves,
  onCheckboxMovesChange,
}) {
  return (
    <div>
      <label htmlFor='input-search'>
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
        weights={selectedWeights}
        heights={selectedHeights}
        onCheckboxWeightsChange={onCheckboxWeightsChange}
        onCheckboxHeightsChange={onCheckboxHeightsChange}
      />
      <Types
        onTypeChange={onTypeChange}
        selectedTypes={selectedTypes}
        onSelectType={onSelectType}
      />
      <Moves moves={moves} onCheckboxMovesChange={onCheckboxMovesChange} />
      <button type='submit' onClick={onClearAllFilters}>
        Reset
      </button>
      <button
        className='button-search'
        type='submit'
        onClick={onClickApplyButton}
      >
        Apply
      </button>
      <button type='submit' onClick={onCloseModal}>
        Back
      </button>
    </div>
  );
}
