import { combineReducers } from 'redux'
import { cakeReducer } from './cake/reducer'

export const rootReducer = combineReducers({
  cakes: cakeReducer
});