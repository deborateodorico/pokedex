import React from 'react';

export default function InputCheckbox({
  weights,
  heights,
  onCheckboxWeightsChange,
  onCheckboxHeightsChange,
}) {
  const weightsOrHeights = [1, 2, 3, 4, 5];
  return (
    <>
      <div className='checkbox-container'>
        <p>Weights</p>
        {weightsOrHeights.map((weight) => {
          return (
            <label key={weight} className='label-weight'>
              <input
                type='checkbox'
                name='weight'
                value={weight}
                className='input-weight'
                checked={weights.includes(String(weight))}
                onChange={onCheckboxWeightsChange}
              />
              <span>{weight}</span>
            </label>
          );
        })}
      </div>
      <div>
        <p>Heights</p>
        {weightsOrHeights.map((height) => {
          return (
            <label key={height} className='label-height'>
              <input
                type='checkbox'
                name='height'
                value={height}
                className='input-height'
                checked={heights.includes(String(height))}
                onChange={onCheckboxHeightsChange}
              />
              <span>{height}</span>
            </label>
          );
        })}
      </div>
    </>
  );
}
