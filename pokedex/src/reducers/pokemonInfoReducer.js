import { ADD_POKEMON } from '../actions/actionsTypes';

export const initialState = {
  pokemons: {},
};

export const pokemonInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POKEMON:
      const newState = {
        ...state,
        pokemons: {
          ...state.pokemons,
          [payload.name]: payload,
        },
      };

      return newState;
    default:
      return state;
  }
};
