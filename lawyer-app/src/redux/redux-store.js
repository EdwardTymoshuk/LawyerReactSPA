import { createStore, combineReducers } from "redux";
import casesReducer from "./casesReducer";

let reducers = combineReducers ({
    casesPage: casesReducer
})
let store = createStore(reducers);

export default store;