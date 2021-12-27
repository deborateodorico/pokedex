import React from 'react';
import weight from './weightDictionary';
import height from './heightDictionary';

export default function InputCheckbox({
  weights,
  heights,
  onCheckboxWeightsChange,
  onCheckboxHeightsChange,
}) {
  let weightValue = Object.keys(weight).map((key) => {
    return [Number(key), weight[key]];
  });

  let heightValue = Object.keys(height).map((key) => {
    return [Number(key), height[key]];
  });

  return (
    <div className='weight-and-height-container'>
      <div className='checkbox-section'>
        <p className='checkbox-paragraph'>Weights</p>
        {weightValue.map((weight) => {
          return (
            <label key={weight} className='checkbox-label'>
              <input
                type='checkbox'
                name='weight'
                value={weight[0]}
                className='checkbox-input'
                checked={weights.includes(String(weight[0]))}
                onChange={onCheckboxWeightsChange}
              />
              <span className='filter-value'>{weight[1]}</span>
            </label>
          );
        })}
      </div>
      <div className='checkbox-section'>
        <p className='checkbox-paragraph'>Heights</p>
        {heightValue.map((height) => {
          return (
            <label key={height} className='checkbox-label'>
              <input
                type='checkbox'
                name='height'
                value={height[0]}
                className='checkbox-input'
                checked={heights.includes(String(height[0]))}
                onChange={onCheckboxHeightsChange}
              />
              <span className='filter-value'>{height[1]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
