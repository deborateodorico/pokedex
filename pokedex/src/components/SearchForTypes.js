import React from 'react';
import { CHANGE_TYPE_VALUE } from '../actions/actionsTypes';
import { connect } from 'react-redux';

function SearchForTypes({ formData, type, changeType }) {
  const onTypeChange = (e) => {
    const newValue = e.target.value;

    changeType(newValue);
  };
  return (
    <div className='types'>
      <p className='types__paragraph'>Types</p>
      {formData.types.map((typeOption) => {
        return (
          <label key={typeOption.name} className='types__section'>
            <input
              type='checkbox'
              name='type'
              value={typeOption.name}
              className='types__section__input'
              checked={type.includes(typeOption.name)}
              onChange={onTypeChange}
            />
            <span className='types__section__value'>{typeOption.name}</span>
          </label>
        );
      })}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    type: state.formData.type,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeType: (newValue) =>
      dispatch({ type: CHANGE_TYPE_VALUE, payload: { type: newValue } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForTypes);
