import { combineReducers } from 'redux';
import { formDataReducer } from './formDataReducer';
import { pokemonsReducer } from './pokemonsReducer';

export const Reducers = combineReducers({
  formData: formDataReducer,
  pokemons: pokemonsReducer,
});
