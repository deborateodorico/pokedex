import React, { useEffect, useState } from 'react';
import LoadingApiMoves from './LoadingApiMoves';
import ErrorApiMoves from './ErrorApiMoves';
import InputCheckboxApiMoves from './InputCheckboxApiMoves';

export default function Moves({ moves, onCheckboxMovesChange }) {
  const [formData, setFormData] = useState({
    moves: [],
  });
  const [MovesRequestState, setMovesRequestState] = useState({
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    fetchApiMove();
  }, []);

  const fetchApiMove = async () => {
    const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADRESS;
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
      console.log(MoveData);
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
    </div>
  );
}
