import { combineReducers } from 'redux';
import { clickReducer } from './clickReducer';
import { formDataReducer } from './formDataReducer';

export const Reducers = combineReducers({
  click: clickReducer,
  formData: formDataReducer,
});
