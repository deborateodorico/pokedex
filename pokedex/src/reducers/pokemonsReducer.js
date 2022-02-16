import { ADD_POKEMON } from '../actions/actionsTypes';

export const initialState = {};

export const pokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POKEMON:
      const newState = {
        ...state,
        [payload.name]: payload,
      };

      return newState;
    default:
      return state;
  }
};
