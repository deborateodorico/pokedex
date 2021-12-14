import React from 'react';
import FetchFilter from './FetchFilter';

export default function Abilitys({ selectedFilters, onCheckboxChange }) {
  const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;

  return (
    <div>
      <FetchFilter
        apiFilter={apiAbilityUrl}
        selectedFilters={selectedFilters}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  );
}
