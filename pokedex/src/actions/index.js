import {
  CLICK_UPDATE_VALUE,
  CHANGE_SEARCH_VALUE,
  CHANGE_LIMIT_VALUE,
  CHANGE_OFFSET_VALUE,
  CHANGE_ABILITY_VALUE,
  CHANGE_HEIGHT_VALUE,
  CHANGE_MOVE_VALUE,
  CHANGE_TYPE_VALUE,
  CHANGE_WEIGHT_VALUE,
} from './actionsTypes';

export const clickButton = (value) => ({
  type: CLICK_UPDATE_VALUE,
  payload: {
    newValue: value,
  },
});

export const search = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: {
    search: value,
  },
});

export const limit = (value) => ({
  type: CHANGE_LIMIT_VALUE,
  payload: {
    limit: value,
  },
});

export const offset = (value) => ({
  type: CHANGE_OFFSET_VALUE,
  payload: {
    offset: value,
  },
});

export const ability = (value) => ({
  type: CHANGE_ABILITY_VALUE,
  payload: {
    ability: value,
  },
});

export const move = (value) => ({
  type: CHANGE_MOVE_VALUE,
  payload: {
    move: value,
  },
});

export const height = (value) => ({
  type: CHANGE_HEIGHT_VALUE,
  payload: {
    height: value,
  },
});

export const weight = (value) => ({
  type: CHANGE_WEIGHT_VALUE,
  payload: {
    weight: value,
  },
});

export const type = (value) => ({
  type: CHANGE_TYPE_VALUE,
  payload: {
    type: value,
  },
});
