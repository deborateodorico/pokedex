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
    <div className='weight-and-height'>
      <div className='weight-and-height__checkbox'>
        <p className='weight-and-height__checkbox__paragraph'>Weights</p>
        {weightValue.map((weight) => {
          return (
            <label key={weight} className='weight-and-height__checkbox__label'>
              <input
                type='checkbox'
                name='weight'
                value={weight[0]}
                className='weight-and-height__checkbox__label__input'
                checked={weights.includes(String(weight[0]))}
                onChange={onCheckboxWeightsChange}
              />
              <span className='weight-and-height__checkbox__label__value'>
                {weight[1]}
              </span>
            </label>
          );
        })}
      </div>
      <div className='weight-and-height__checkbox'>
        <p className='weight-and-height__checkbox__paragraph'>Heights</p>
        {heightValue.map((height) => {
          return (
            <label key={height} className='weight-and-height__checkbox__label'>
              <input
                type='checkbox'
                name='height'
                value={height[0]}
                className='weight-and-height__checkbox__label__input'
                checked={heights.includes(String(height[0]))}
                onChange={onCheckboxHeightsChange}
              />
              <span className='weight-and-height__checkbox__label__value'>
                {height[1]}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
