import React from 'react';
import FetchFilter from './FetchFilter';

export default function Abilities({ selectedFilters, onCheckboxChange }) {
  const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;
  const paragraphName = 'Abilities';

  return (
    <div>
      <FetchFilter
        apiFilter={apiAbilityUrl}
        selectedFilters={selectedFilters}
        onCheckboxChange={onCheckboxChange}
        filterName={paragraphName}
      />
    </div>
  );
}
