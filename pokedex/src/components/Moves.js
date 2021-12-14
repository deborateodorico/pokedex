import React from 'react';
import FetchFilter from './FetchFilter';

export default function Abilitys({ selectedFilters, onCheckboxChange }) {
  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;

  return (
    <div>
      <FetchFilter
        apiFilter={apiMoveUrl}
        selectedFilters={selectedFilters}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  );
}
