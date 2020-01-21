import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";
import casesReducer from "./casesReducer";

let reducers = combineReducers({
    app: appReducer,
    cases: casesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;