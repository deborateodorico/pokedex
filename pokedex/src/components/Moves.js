import React from 'react';
import FetchFilter from './FetchFilter';
import { connect } from 'react-redux';
import { CHANGE_MOVE_VALUE } from '../actions/actionsTypes';

function Moves({ changeMoves, onSearchMove, move }) {
  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;
  const paragraphName = 'Moves';

  const onMoveChange = (e) => {
    const newValue = e.target.value;

    changeMoves(newValue);
  };

  return (
    <div>
      <FetchFilter
        apiFilter={apiMoveUrl}
        selectedFilters={move}
        onCheckboxChange={onMoveChange}
        filterName={paragraphName}
        searchChange={onSearchMove}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    move: state.formData.move,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeMoves: (newValue) =>
      dispatch({ type: CHANGE_MOVE_VALUE, payload: { move: newValue } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Moves);
