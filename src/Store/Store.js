import {createStore,combineReducers} from 'redux';
import {reducer as reducer1} from '../component/pc1';
import {reducer as reducer2} from '../component/pc2';
import {routerReducer} from 'react-router-redux';
import resetEnhancer from './resetEnhancer.js';

const initData = {
    d1: 1,
    d2: 2,
};
const reducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2
});

const originalReducers = {
  routing: routerReducer
}
const r = combineReducers(originalReducers);
const store = createStore(r, {}, resetEnhancer);

store._reducers = originalReducers;
export default store;
