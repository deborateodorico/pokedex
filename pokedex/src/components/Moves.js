import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import SearchForMoves from './SearchForMoves';

export default function Moves({ moves, onCheckboxMovesChange }) {
  const [formData, setFormData] = useState({
    moves: [],
    search: '',
  });
  const [movesRequestState, setMovesRequestState] = useState({
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    fetchApiMove();
  }, []);

  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;

  const handleSearchChange = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const fetchApiMove = async () => {
    try {
      setMovesRequestState({
        ...movesRequestState,
        isLoading: true,
      });
      const response = await fetch(apiMoveUrl);
      setMovesRequestState({
        ...movesRequestState,
        isLoading: false,
      });
      const moveData = await response.json();
      setFormData({
        ...formData,
        moves: moveData.results,
      });
    } catch (error) {
      setMovesRequestState({
        ...movesRequestState,
        error: true,
        isLoading: false,
      });
    }
  };
  return (
    <div>
      {movesRequestState.isLoading && <Loading />}
      {movesRequestState.error && !movesRequestState.isLoading && (
        <Error fetch={fetchApiMove} />
      )}
      <SearchForMoves
        selectedMoves={moves}
        onCheckboxMovesChange={onCheckboxMovesChange}
        moves={formData.moves}
        search={formData.search}
        onSearchValue={handleSearchChange}
      />
    </div>
  );
}
