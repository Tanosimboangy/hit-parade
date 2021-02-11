import { createStore } from 'redux';
import combineReducers from './reducers/index';
import state from './state';
// console.log(combineReducers);
const store = createStore(combineReducers, state);
export default store;
