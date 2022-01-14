import React from 'react';
import InputCheckbox from './InputCheckbox';
import Types from './Types';
import Moves from './Moves';
import Abilities from './Abilities';
import closer from '../icons/closer.png';

export default function Filters({
  // selectedWeights,
  // selectedHeights,
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
      <InputCheckbox
        // weights={selectedWeights}
        // heights={selectedHeights}
        onCheckboxWeightsChange={onCheckboxWeightsChange}
        onCheckboxHeightsChange={onCheckboxHeightsChange}
      />
      <Types
        onTypeChange={onTypeChange}
        // selectedTypes={selectedTypes}
        onSelectType={onSelectType}
      />
      <Moves
        // selectedFilters={moves}
        onCheckboxChange={onCheckboxMovesChange}
        onSearchMove={onSearchMove}
      />
      <Abilities
        // selectedFilters={abilities}
        onCheckboxChange={onCheckboxAbilitysChange}
        onSearchAbilities={onSearchAbilities}
      />
      <div className='filters__buttons-section'>
        <button
          type='submit'
          onClick={onClearAllFilters}
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
