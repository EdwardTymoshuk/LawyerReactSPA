
const SET_CASE_ELEMENT = 'SET_CASE_ELEMENT';

let initialState = {
  caseElement: null
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

export default caseElementReducer;