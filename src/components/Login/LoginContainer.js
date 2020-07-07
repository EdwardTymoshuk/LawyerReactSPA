import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLoginData } from '../../redux/authReducer';
import Login from './Login';

const LoginContainer = (props) => {

  const [loginError, setLoginError] = useState()

  const setLogin = (email, password) => {
    props.setLoginData(email, password).then(response => 
      setLoginError(response)
    )
  }
  return (
      <Login {...props} setLogin={setLogin} loginError={loginError}/>
    )
  }
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
  
} )
  export default connect(mapStateToProps, {setLoginData})(LoginContainer);