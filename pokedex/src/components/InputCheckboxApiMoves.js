import React from 'react';

export default function InputCheckboxApiMoves({
  formData,
  onCheckboxMovesChange,
  moves,
}) {
  console.log(formData);
  return (
    <div>
      {formData.slice(0, 19).map((move) => {
        return (
          <label key={move.name}>
            {move.name}
            <input
              type='checkbox'
              name='move'
              value={move.name}
              className='Input-moves'
              checked={moves.includes(move.name)}
              onChange={onCheckboxMovesChange}
            />
          </label>
        );
      })}
    </div>
  );
}
