import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

export default createStore(
  combineReducers(rootReducer),
  initialState,
  applyMiddleware(thunk),
);
