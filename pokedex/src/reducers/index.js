import { combineReducers } from 'redux';
import { formDataReducer } from './formDataReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { pokemonListReducer } from './pokemonListReducer';

export const Reducers = combineReducers({
  formData: formDataReducer,
  pokemons: pokemonsReducer,
  pokemonsList: pokemonListReducer,
});
