import {
  CHANGE_SEARCH_VALUE,
  CHANGE_LIMIT_VALUE,
  INCREMENT_OFFSET_VALUE,
  DECREMENT_OFFSET_VALUE,
  CHANGE_ABILITY_VALUE,
  CHANGE_HEIGHT_VALUE,
  CHANGE_MOVE_VALUE,
  CHANGE_TYPE_VALUE,
  CHANGE_WEIGHT_VALUE,
  CLEAR_ALL_FILTERS,
} from '../actions/actionsTypes';

export const initialState = {
  search: '',
  height: [],
  weight: [],
  type: [],
  limit: 12,
  offset: 0,
  move: [],
  ability: [],
};

export const formDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        search: payload.search,
      };
    case CHANGE_LIMIT_VALUE:
      return {
        ...state,
        limit: payload.limit,
      };
    case INCREMENT_OFFSET_VALUE:
      return {
        ...state,
        offset: state.offset + state.limit,
      };
    case DECREMENT_OFFSET_VALUE:
      return {
        ...state,
        offset: state.offset - state.limit,
      };
    case CHANGE_ABILITY_VALUE:
      if (state.ability.includes(payload.ability)) {
        return {
          ...state,
          ability: state.ability.filter((item) => item !== payload.ability),
        };
      } else {
        return {
          ...state,
          ability: [...state.ability, payload.ability],
        };
      }
    case CHANGE_MOVE_VALUE:
      if (state.move.includes(payload.move)) {
        return {
          ...state,
          move: state.move.filter((item) => item !== payload.move),
        };
      } else {
        return {
          ...state,
          move: [...state.move, payload.move],
        };
      }
    case CHANGE_HEIGHT_VALUE:
      if (state.height.includes(payload.height)) {
        return {
          ...state,
          height: state.height.filter((item) => item !== payload.height),
        };
      } else {
        return {
          ...state,
          height: [...state.height, payload.height],
        };
      }
    case CHANGE_WEIGHT_VALUE:
      if (state.weight.includes(payload.weight)) {
        return {
          ...state,
          weight: state.weight.filter((item) => item !== payload.weight),
        };
      } else {
        return {
          ...state,
          weight: [...state.weight, payload.weight],
        };
      }
    case CHANGE_TYPE_VALUE:
      if (state.type.includes(payload.type)) {
        return {
          ...state,
          type: state.type.filter((item) => item !== payload.type),
        };
      } else {
        return {
          ...state,
          type: [...state.type, payload.type],
        };
      }
    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        search: '',
        height: [],
        weight: [],
        type: [],
        move: [],
        ability: [],
      };
    default:
      return state;
  }
};
