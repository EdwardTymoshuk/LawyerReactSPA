import {loginAPI} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_AUTH_ME = 'SET_AUTH_ME';

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
    case SET_LOGOUT: {
      return {
        ...state,
        name: null,
        email: null,
        isAuth: false
      }
    }
    case SET_AUTH_ME: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

export const setAuthUserData = (name, email) => ({ type: SET_USER_DATA, name, email});
export const logOut = () => ({type: SET_LOGOUT});
export const authMe = () => ({type: SET_AUTH_ME})
export const setLoginData = (email, password) => (dispatch) => {
    loginAPI.loginMe({email, password}).then((response) => {
      if (response.status === 200) { 
        dispatch(setAuthUserData(response.data.name, response.data.email));
        alert('You`re loged in!')
      } else if (response.status === 400) { 
        alert('Login failed!')
    }
  })
}
// export const authMe = () => (dispatch) => {
//   loginAPI.authMe().then((response) => {
//     console.log(response)
//     if (response.status === 200) { 
//       console.log(response.data)
//     } else { 
//       console.log('error')
//   }
//   })
// }
export default authReducer;