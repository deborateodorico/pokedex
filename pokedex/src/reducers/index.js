import { combineReducers } from 'redux';
import { formDataReducer } from './formDataReducer';

export const Reducers = combineReducers({
  formData: formDataReducer,
});
