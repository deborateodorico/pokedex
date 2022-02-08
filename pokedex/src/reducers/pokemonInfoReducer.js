import {
  SHOW_POKEMON_DETAILS_NAME,
  SHOW_POKEMON_DETAILS_ID,
  SHOW_POKEMON_DETAILS_PICTURE,
  SHOW_POKEMON_DETAILS_TYPES,
  SHOW_POKEMON_DETAILS_ABILITIES,
  SHOW_POKEMON_DETAILS_HEIGHT,
  SHOW_POKEMON_DETAILS_WEIGHT,
  SHOW_POKEMON_DETAILS_STATS,
} from '../actions/actionsTypes';

export const initialState = {
  pokemons: {
    pokemon: {
      name: '',
      id: 0,
      picture: '',
      types: [],
      abilities: [],
      height: 0,
      weight: 0,
      stats: [],
    },
  },
};

export const pokemonInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_POKEMON_DETAILS_NAME:
      return {
        ...state,
        [payload.name]: payload,
      };
    case SHOW_POKEMON_DETAILS_ID:
      return {
        ...state,
        [payload.id]: payload,
      };
    case SHOW_POKEMON_DETAILS_PICTURE:
      return {
        ...state,
        [payload.picture]: payload,
      };
    case SHOW_POKEMON_DETAILS_TYPES:
      return {
        ...state,
        [payload.types]: payload,
      };
    case SHOW_POKEMON_DETAILS_ABILITIES:
      return {
        ...state,
        [payload.abilities]: payload,
      };
    case SHOW_POKEMON_DETAILS_HEIGHT:
      return {
        ...state,
        [payload.height]: payload,
      };
    case SHOW_POKEMON_DETAILS_WEIGHT:
      return {
        ...state,
        [payload.weight]: payload,
      };
    case SHOW_POKEMON_DETAILS_STATS:
      return {
        ...state,
        [payload.stats]: payload,
      };
    default:
      return state;
  }
};
