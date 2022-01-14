import React from 'react';
import weightDictionary from './weightDictionary';
import height from './heightDictionary';
import { connect } from 'react-redux';
import {
  CHANGE_SEARCH_VALUE,
  CHANGE_LIMIT_VALUE,
  CHANGE_OFFSET_VALUE,
  CHANGE_ABILITY_VALUE,
  CHANGE_HEIGHT_VALUE,
  CHANGE_MOVE_VALUE,
  CHANGE_TYPE_VALUE,
  CHANGE_WEIGHT_VALUE,
} from '../actions/actionsTypes';

function InputCheckbox({
  heights,
  weight,
  changeWeight,
  onCheckboxHeightsChange,
}) {
  const weightValue = Object.keys(weightDictionary).map((key) => {
    return [Number(key), weightDictionary[key]];
  });

  const heightValue = Object.keys(height).map((key) => {
    return [Number(key), height[key]];
  });

  const onWeightChange = (e) => {
    const newValue = e.target.value;

    changeWeight(newValue);
  };

  return (
    <div className='weight-and-height'>
      <div className='weight-and-height__checkbox'>
        <p className='weight-and-height__checkbox__paragraph'>Weights</p>
        {weightValue.map((weightOption) => {
          return (
            <label
              key={weightOption}
              className='weight-and-height__checkbox__label'
            >
              <input
                type='checkbox'
                name='weight'
                value={weightOption[0]}
                className='weight-and-height__checkbox__label__input'
                checked={weight.includes(String(weightOption[0]))}
                onChange={onWeightChange}
              />
              <span className='weight-and-height__checkbox__label__value'>
                {weightOption[1]}
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

function mapStateToProps(state) {
  return {
    weight: state.formData.weight,
  };
}

function matDispatchToProps(dispatch) {
  return {
    changeWeight: (newValue) =>
      dispatch({ type: CHANGE_WEIGHT_VALUE, payload: { weight: newValue } }),
  };
}

export default connect(mapStateToProps, matDispatchToProps)(InputCheckbox);
