import React, { useEffect, useState } from 'react';
import LoadingApiMoves from './LoadingApiMoves';
import ErrorApiMoves from './ErrorApiMoves';
import InputCheckboxApiMoves from './InputCheckboxApiMoves';

export default function Moves({ moves, onCheckboxMovesChange }) {
  const [formData, setFormData] = useState({
    moves: [],
    search: '',
  });
  const [MovesRequestState, setMovesRequestState] = useState({
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    fetchApiMove();
  }, []);

  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADRESS;

  const handleSearchChange = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const fetchApiMove = async () => {
    try {
      setMovesRequestState({
        ...MovesRequestState,
        isLoading: true,
      });
      const response = await fetch(apiMoveUrl);
      setMovesRequestState({
        ...MovesRequestState,
        isLoading: false,
      });
      const MoveData = await response.json();
      setFormData({
        ...formData,
        moves: MoveData.results,
      });
    } catch (error) {
      setMovesRequestState({
        ...MovesRequestState,
        error: true,
        isLoading: false,
      });
    }
  };
  return (
    <div>
      {MovesRequestState.isLoading && <LoadingApiMoves />}
      {MovesRequestState.error && !MovesRequestState.isLoading && (
        <ErrorApiMoves fetchApiType={fetchApiMove} />
      )}
      <InputCheckboxApiMoves
        moves={moves}
        onCheckboxMovesChange={onCheckboxMovesChange}
        formData={formData.moves}
        search={formData.search}
        onSearchValue={handleSearchChange}
      />
    </div>
  );
}
