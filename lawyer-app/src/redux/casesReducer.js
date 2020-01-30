const ADD_CASE = 'ADD_CASE';
const UPDATE_NEW_CASE = 'UPDATE_NEW_CASE';

const casesReducer = (state, action) => {
    switch (action.type) {
        case ADD_CASE:
            state.push(state.newCase);
            state.newCase = {};
            return state;
        case UPDATE_NEW_CASE:
            state.newCase = action.newCase;
            return state;
        default:
            return state;
    }
}
export const addCaseAC = () => {
    return {
      type: ADD_CASE
    }
  }
  export const updateNewCaseAC = (newCase) => {
    return {
      type: UPDATE_NEW_CASE,
      newCase: newCase
    }
  }
export default casesReducer;