import React from 'react';
import weightDictionary from './weightDictionary';
import heightDictionary from './heightDictionary';
import { connect } from 'react-redux';
import {
  CHANGE_SEARCH_VALUE,
  CHANGE_LIMIT_VALUE,
  CHANGE_OFFSET_VALUE,
  CHANGE_HEIGHT_VALUE,
  CHANGE_WEIGHT_VALUE,
} from '../actions/actionsTypes';

function InputCheckbox({ height, weight, changeHeight, changeWeight }) {
  const weightValue = Object.keys(weightDictionary).map((key) => {
    return [Number(key), weightDictionary[key]];
  });

  const heightValue = Object.keys(heightDictionary).map((key) => {
    return [Number(key), heightDictionary[key]];
  });

  const onWeightChange = (e) => {
    const newValue = e.target.value;

    changeWeight(newValue);
  };

  const onHeightChange = (e) => {
    const newValue = e.target.value;

    changeHeight(newValue);
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
        {heightValue.map((heightOption) => {
          return (
            <label
              key={heightOption}
              className='weight-and-height__checkbox__label'
            >
              <input
                type='checkbox'
                name='height'
                value={heightOption[0]}
                className='weight-and-height__checkbox__label__input'
                checked={height.includes(String(heightOption[0]))}
                onChange={onHeightChange}
              />
              <span className='weight-and-height__checkbox__label__value'>
                {heightOption[1]}
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
    height: state.formData.height,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeWeight: (newValue) =>
      dispatch({ type: CHANGE_WEIGHT_VALUE, payload: { weight: newValue } }),
    changeHeight: (newValue) =>
      dispatch({ type: CHANGE_HEIGHT_VALUE, payload: { height: newValue } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCheckbox);
