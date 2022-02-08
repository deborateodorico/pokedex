import { combineReducers } from 'redux';
import { formDataReducer } from './formDataReducer';
import { pokemonInfoReducer } from './pokemonInfoReducer';

export const Reducers = combineReducers({
  formData: formDataReducer,
  pokemonInfo: pokemonInfoReducer,
});
