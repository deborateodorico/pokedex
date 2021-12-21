import React from 'react';
import InputCheckbox from './InputCheckbox';
import Types from './Types';
import Moves from './Moves';
import Abilities from './Abilities';
import closer from '../icons/closer.png';

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
  onCheckboxAbilitysChange,
  abilities,
}) {
  return (
    <div className='div-modal'>
      <div className='container-modal-header'>
        <p className='filters-paragraph'>Filters</p>
        <button type='submit' onClick={onCloseModal} className='closer-button'>
          <img src={closer} alt='closer-icon' className='closer-img' />
        </button>
      </div>

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
      <Moves selectedFilters={moves} onCheckboxChange={onCheckboxMovesChange} />
      <Abilities
        selectedFilters={abilities}
        onCheckboxChange={onCheckboxAbilitysChange}
      />
      <div className='buttons-container'>
        <button
          type='submit'
          onClick={onClearAllFilters}
          className='clear-button'
        >
          Clear filters
        </button>
        <button
          className='search-button'
          type='submit'
          onClick={onClickApplyButton}
        >
          Show results
        </button>
      </div>
    </div>
  );
}
