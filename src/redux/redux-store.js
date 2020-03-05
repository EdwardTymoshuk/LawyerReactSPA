import { createStore, combineReducers } from 'redux';
import casesReducer from './casesReducer';
import caseElementReducer from './caseElementReducer';
import authReducer from './authReducer';


let reducers = combineReducers ({
    casesPage: casesReducer,
    caseElementPage:caseElementReducer,
    auth: authReducer
})
let store = createStore(reducers);
window.store = store;
export default store;