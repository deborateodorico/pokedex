import React, { useState } from 'react';
import SearchForMoves from './SearchForMoves';
import FetchFilter from './FetchFilter';

export default function Moves({ moves, onCheckboxMovesChange }) {
  const [formData, setFormData] = useState({
    search: '',
  });

  const handleSearchChange = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;

  return (
    <div>
      <FetchFilter apiFilter={apiMoveUrl} />
      <SearchForMoves
        selectedMoves={moves}
        onCheckboxMovesChange={onCheckboxMovesChange}
        moves={moves}
        search={formData.search}
        onSearchValue={handleSearchChange}
      />
    </div>
  );
}
