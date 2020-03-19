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

export const getCaseElement = (caseId) => (dispatch) => {
  casesAPI.getCaseElement(caseId).then(response => {
            dispatch(setCaseElement(response.data)); 
        })
}
export const updateCaseElement = (caseId, caseElement) => (dispatch) => {
  casesAPI.updateCaseElement(caseId, caseElement).then(
    casesAPI.getCaseElement(caseId).then(response => {
      dispatch(setCaseElement(response.data)); 
  })
  )
}


export default caseElementReducer;