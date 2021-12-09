import React from 'react';

export default function SearchForMoves({
  moves,
  onCheckboxMovesChange,
  selectedMoves,
  onSearchValue,
  search,
}) {
  const filteredMoves = moves.filter((item) => {
    const includesSearch = item.name.includes(search);
    return includesSearch;
  });

  return (
    <>
      <p>Moves</p>
      <input
        type='text'
        name='input-search'
        placeholder='Search moves...'
        onChange={onSearchValue}
      />
      <div className='moves-container'>
        {filteredMoves.map((move) => {
          return (
            <div>
              <label key={move.name}>
                {move.name}
                <input
                  type='checkbox'
                  name='move'
                  value={move.name}
                  className='input-moves'
                  checked={selectedMoves.includes(move.name)}
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
