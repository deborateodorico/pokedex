import {
  CHANGE_SEARCH_VALUE,
  CHANGE_LIMIT_VALUE,
  CHANGE_ABILITY_VALUE,
  CHANGE_HEIGHT_VALUE,
  CHANGE_MOVE_VALUE,
  CHANGE_TYPE_VALUE,
  CHANGE_WEIGHT_VALUE,
} from './actionsTypes';

import { ADD_POKEMON } from './actionsTypes';

import { ADD_POKEMON_LIST } from './actionsTypes';

export const changeSearch = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: {
    search: value,
  },
});

export const changeLimit = (value) => ({
  type: CHANGE_LIMIT_VALUE,
  payload: {
    limit: value,
  },
});

export const changeAbility = (value) => ({
  type: CHANGE_ABILITY_VALUE,
  payload: {
    ability: value,
  },
});

export const changeMove = (value) => ({
  type: CHANGE_MOVE_VALUE,
  payload: {
    move: value,
  },
});

export const changeHeight = (value) => ({
  type: CHANGE_HEIGHT_VALUE,
  payload: {
    height: value,
  },
});

export const changeWeight = (value) => ({
  type: CHANGE_WEIGHT_VALUE,
  payload: {
    weight: value,
  },
});

export const changeType = (value) => ({
  type: CHANGE_TYPE_VALUE,
  payload: {
    type: value,
  },
});

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON,
  payload: pokemon,
});

export const addPokemonList = (data) => ({
  type: ADD_POKEMON_LIST,
  payload: data,
});
