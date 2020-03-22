import { casesAPI } from "../api/api";

const SET_CASES = 'SET_CASES';
const ADD_CASE = 'ADD_CASE';
const UPDATE_NEW_CASE = 'UPDATE_NEW_CASE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  cases: [],
  isFetching: false
}

const casesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CASES:
      return { ...state, cases: [...action.cases] }
    case ADD_CASE:
      let body = state.newCase;
      return {
        ...state,
        newCase: {},
        cases: [...state.cases, body]
      }
    case UPDATE_NEW_CASE:
      return {
        ...state,
        newCase: action.newCase
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
}
export const setCases = (cases) => ({ type: SET_CASES, cases });
export const addCase = () => ({ type: ADD_CASE });
export const updateNewCase = (newCase) => ({ type: UPDATE_NEW_CASE, newCase });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getCases = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await casesAPI.getCases();
  dispatch(toggleIsFetching(false));
  dispatch(setCases(data));
}
export const uploadCase = (newCase) => async (dispatch) => {
  let response = await casesAPI.addCaseElement(newCase);
  if (response.status === 200) { alert("New case was successfully added!") }
  dispatch(getCases());
}

export const deleteCaseElement = (caseId) => async (dispatch) => {
  let response = await casesAPI.deleteCaseElement(caseId);
  if (response.status === 200) alert('The case was succesfully deleted!');
  dispatch(getCases());
}

export default casesReducer;