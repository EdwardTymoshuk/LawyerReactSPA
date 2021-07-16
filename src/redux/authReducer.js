import { loginAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGOUT = 'SET_LOGOUT'
const SET_AUTH_ME = 'SET_AUTH_ME'
const SET_REGISTER_VALIDATE = 'SET_REGISTER_VALIDATE'

let initialState = {
  name: null,
  email: null,
  isAuth: false,
  registerValidate: false
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
        isAuth: false,
        registerValidate: false
      }
    }
    case SET_AUTH_ME: {
      return {
        ...state
      }
    }
    case SET_REGISTER_VALIDATE: {
      return {
        ...state, registerValidate: true
      }
    }
    default:
      return state
  }
}

export const setAuthUserData = (name, email) => ({ type: SET_USER_DATA, name, email })
export const logOut = () => ({ type: SET_LOGOUT })
export const authMe = () => ({ type: SET_AUTH_ME })
export const setRegisterValidate = () => ({ type: SET_REGISTER_VALIDATE })
export const setLoginData = (email, password) => async (dispatch) => {
  try {
    let response = await loginAPI.loginMe({ email, password })
    dispatch(setAuthUserData(response.data.name, response.data.email))
  } catch (err) {
    return err
  }
}
export const setNewUserData = (name, email, password) => async (dispatch) => {
  try {
    await loginAPI.registerMe(name, email, password)
    dispatch(setRegisterValidate())
  } catch (err) {
    return (err.response.data)
  }
}
export default authReducer