import { ADD_POKEMON_LIST } from '../actions/actionsTypes';

export const initialState = null;

export const pokemonListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POKEMON_LIST:
      const newState = payload;
      return newState;
    default:
      return state;
  }
};
