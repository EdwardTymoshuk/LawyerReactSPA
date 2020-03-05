import {loginAPI} from '../api/api'

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
        isAuth: action.name ? true : false
      }
    }
    default:
      return state;
  }
}

export const setAuthUserData = (name, email) => ({ type: SET_USER_DATA, name, email});
export const setLoginData = (email, password) => {
  return (dispatch) => {
    loginAPI.loginMe(email, password).then((response) => {
      console.log(response.data)
      if (response.status === 200) { 
        dispatch(setAuthUserData(response.data.name, response.data.email))
      } else {
        console.log(response);
      }
    })
  }
}
export default authReducer;