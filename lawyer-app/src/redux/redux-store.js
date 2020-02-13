import { createStore, combineReducers } from 'redux';
import casesReducer from './casesReducer';
import caseElementReducer from './caseElementReducer';

let reducers = combineReducers ({
    casesPage: casesReducer,
    caseElementPage:caseElementReducer
})
let store = createStore(reducers);
window.store = store;
export default store;