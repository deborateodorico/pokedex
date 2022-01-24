import React from 'react';
import FetchFilter from './FetchFilter';
import { connect } from 'react-redux';
import { changeAbility } from '../actions/index';

function Abilities({ onSearchAbilities, ability, actions }) {
  const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;
  const paragraphName = 'Abilities';

  const onAbilityChange = (e) => {
    const newValue = e.target.value;

    actions.changeAbility(newValue);
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeAbility: (newValue) => dispatch(changeAbility(newValue)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Abilities);
