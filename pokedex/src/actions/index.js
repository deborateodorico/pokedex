import {
  CHANGE_SEARCH_VALUE,
  CHANGE_LIMIT_VALUE,
  CHANGE_ABILITY_VALUE,
  CHANGE_HEIGHT_VALUE,
  CHANGE_MOVE_VALUE,
  CHANGE_TYPE_VALUE,
  CHANGE_WEIGHT_VALUE,
} from './actionsTypes';

import {
  SHOW_POKEMON_DETAILS_NAME,
  SHOW_POKEMON_DETAILS_ID,
  SHOW_POKEMON_DETAILS_PICTURE,
  SHOW_POKEMON_DETAILS_TYPES,
  SHOW_POKEMON_DETAILS_ABILITIES,
  SHOW_POKEMON_DETAILS_HEIGHT,
  SHOW_POKEMON_DETAILS_WEIGHT,
  SHOW_POKEMON_DETAILS_STATS,
} from './actionsTypes';

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

export const showDetailsName = (value) => ({
  type: SHOW_POKEMON_DETAILS_NAME,
  payload: {
    name: value,
  },
});

export const showDetailsId = (value) => ({
  type: SHOW_POKEMON_DETAILS_ID,
  payload: {
    id: value,
  },
});

export const showDetailsPicture = (value) => ({
  type: SHOW_POKEMON_DETAILS_PICTURE,
  payload: {
    picture: value,
  },
});

export const showDetailsTypes = (value) => ({
  type: SHOW_POKEMON_DETAILS_TYPES,
  payload: {
    types: value,
  },
});

export const showDetailsAbilities = (value) => ({
  type: SHOW_POKEMON_DETAILS_ABILITIES,
  payload: {
    abilities: value,
  },
});

export const showDetailsHeight = (value) => ({
  type: SHOW_POKEMON_DETAILS_HEIGHT,
  payload: {
    height: value,
  },
});

export const showDetailsWeight = (value) => ({
  type: SHOW_POKEMON_DETAILS_WEIGHT,
  payload: {
    weight: value,
  },
});

export const showDetailsStats = (value) => ({
  type: SHOW_POKEMON_DETAILS_STATS,
  payload: {
    stats: value,
  },
});
