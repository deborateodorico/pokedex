import React from 'react';

export default function InputCheckboxApiMoves({
  formData,
  onCheckboxMovesChange,
  moves,
  onSearchValue,
  search,
}) {
  const movesfiltrados = formData.filter((item) => {
    const hasSearch = item.name.includes(search);

    return hasSearch;
  });

  return (
    <>
      <p>Moves</p>
      <input
        type='text'
        className='input-sea'
        name='input-search'
        placeholder='Search moves...'
        onChange={onSearchValue}
      />
      <div className='moves-container'>
        {movesfiltrados.map((move) => {
          return (
            <div>
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
            </div>
          );
        })}
      </div>
    </>
  );
}
