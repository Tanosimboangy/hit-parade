import { createStore } from 'redux';
import reducers from '../src/reducers';
import state from './state';
const store = createStore(reducers, state);
export default store;