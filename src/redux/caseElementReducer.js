import { casesAPI } from "../api/api";

const SET_CASE_ELEMENT = 'SET_CASE_ELEMENT';

let initialState = {
  caseElement: {}
}

const caseElementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CASE_ELEMENT: {
      return {
        ...state,
        caseElement: action.caseElement
      }
    }
    default:
      return state;
  }
}

export const setCaseElement = (caseElement) => ({ type: SET_CASE_ELEMENT, caseElement });

export const getCaseElement = (caseId) => async (dispatch) => {
  let response = await casesAPI.getCaseElement(caseId);
    if (response.status === 200) dispatch(setCaseElement(response.data)); 
}
export const updateCaseElement = (caseId, caseElement) => async (dispatch) => {
  let response = await casesAPI.updateCaseElement(caseId, caseElement);
  if (response.status === 200) dispatch(setCaseElement(caseElement)); 
}


export default caseElementReducer;