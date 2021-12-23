import React from 'react';
import FetchFilter from './FetchFilter';

export default function Moves({
  selectedFilters,
  onCheckboxChange,
  searchMoves,
  onSearchMove,
}) {
  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;
  const paragraphName = 'Moves';

  return (
    <div>
      <FetchFilter
        apiFilter={apiMoveUrl}
        selectedFilters={selectedFilters}
        onCheckboxChange={onCheckboxChange}
        filterName={paragraphName}
        searchInputValue={searchMoves}
        searchChange={onSearchMove}
      />
    </div>
  );
}
