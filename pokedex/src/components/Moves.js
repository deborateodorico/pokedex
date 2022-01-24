import React from 'react';
import FetchFilter from './FetchFilter';
import { connect } from 'react-redux';
import { changeMove } from '../actions/index';

function Moves({ actions, onSearchMove, move }) {
  const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;
  const paragraphName = 'Moves';

  const onMoveChange = (e) => {
    const newValue = e.target.value;

    actions.changeMoves(newValue);
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
    actions: {
      changeMoves: (newValue) => dispatch(changeMove(newValue)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Moves);
