import { createStore, combineReducers, applyMiddleware } from 'redux'
import casesReducer from './casesReducer'
import caseElementReducer from './caseElementReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers ({
    casesPage: casesReducer,
    caseElementPage:caseElementReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store