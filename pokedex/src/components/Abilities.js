import React from 'react';
import FetchFilter from './FetchFilter';
import { connect } from 'react-redux';
import { CHANGE_ABILITY_VALUE } from '../actions/actionsTypes';

function Abilities({ onSearchAbilities, ability, changeAbility }) {
  const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;
  const paragraphName = 'Abilities';

  const onAbilityChange = (e) => {
    const newValue = e.target.value;

    changeAbility(newValue);
  };

  return (
    <div>
      <FetchFilter
        apiFilter={apiAbilityUrl}
        selectedFilters={ability}
        onCheckboxChange={onAbilityChange}
        filterName={paragraphName}
        searchChange={onSearchAbilities}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ability: state.formData.ability,
  };
}

function matDispatchToProps(dispatch) {
  return {
    changeAbility: (newValue) =>
      dispatch({ type: CHANGE_ABILITY_VALUE, payload: { ability: newValue } }),
  };
}

export default connect(mapStateToProps, matDispatchToProps)(Abilities);
