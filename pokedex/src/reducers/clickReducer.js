import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';

const initialState = {
  newValue: '',
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.payload.newValue,
      };
    default:
      return state;
  }
};
