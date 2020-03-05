
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  name: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        isAuth: true
      }
    }
    default:
      return state;
  }
}

export const setAuthUserData = (name, email) => ({ type: SET_USER_DATA, name, email });

export default authReducer;