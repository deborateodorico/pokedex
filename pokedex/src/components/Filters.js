import React from 'react';
import InputCheckbox from './InputCheckbox';
import Types from './Types';
import Moves from './Moves';
import Abilities from './Abilities';
import closer from '../icons/closer.png';

export default function Filters({
  selectedWeights,
  selectedHeights,
  searchMoves,
  searchAbilities,
  onSearchMove,
  onSearchAbilities,
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
      <div className='filters-header'>
        <p className='filters-paragraph'>Filters</p>
        <button type='submit' onClick={onCloseModal} className='closer-button'>
          <img src={closer} alt='closer-icon' className='closer-img' />
        </button>
      </div>
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
      <Moves
        selectedFilters={moves}
        onCheckboxChange={onCheckboxMovesChange}
        searchMoves={searchMoves}
        onSearchMove={onSearchMove}
      />
      <Abilities
        selectedFilters={abilities}
        onCheckboxChange={onCheckboxAbilitysChange}
        searchAbilities={searchAbilities}
        onSearchAbilities={onSearchAbilities}
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
