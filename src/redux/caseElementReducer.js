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
    try {
      dispatch(setCaseElement(response.data)); 
    } catch(err) {
      alert({message: err})
    }
}
export const updateCaseElement = (caseId, caseElement) => async (dispatch) => {
  await casesAPI.updateCaseElement(caseId, caseElement);
  try {
    dispatch(setCaseElement(caseElement));
  } catch(err) {
    alert(err)
  } 
}


export default caseElementReducer;