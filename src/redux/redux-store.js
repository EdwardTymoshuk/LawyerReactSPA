import { createStore, combineReducers, applyMiddleware } from 'redux';
import casesReducer from './casesReducer';
import caseElementReducer from './caseElementReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers ({
    casesPage: casesReducer,
    caseElementPage:caseElementReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;