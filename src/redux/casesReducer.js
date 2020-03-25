import { casesAPI } from "../api/api";

const SET_CASES = 'SET_CASES';
const ADD_CASE = 'ADD_CASE';
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
      return {
        ...state,
        cases: [...state.cases, action.newCase]
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
export const addCase = (newCase) => ({ type: ADD_CASE, newCase });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getCases = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await casesAPI.getCases();
  dispatch(toggleIsFetching(false));
  dispatch(setCases(data));
}
export const uploadCase = (newCase) => async (dispatch) => {
  await casesAPI.addCaseElement(newCase);
  try { 
    alert("New case was successfully added!") 
  } catch(err) {
    alert({message: err})
  }
  dispatch(addCase(newCase));
}

export const deleteCaseElement = (caseId) => async (dispatch) => {
  let response = await casesAPI.deleteCaseElement(caseId);
  if (response.status === 200) alert('The case was succesfully deleted!');
  dispatch(getCases());
}

export default casesReducer;