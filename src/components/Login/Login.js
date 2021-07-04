import React, { useState } from 'react'
import {Form, Button, FormGroup, Container} from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form'
import {Redirect, NavLink} from 'react-router-dom'
import './Login.css'
import LoginForm  from './LoginForm'

const Login = (props) => {

  if (props.isAuth) return <Redirect to="/cases" />
  return (
        <Container fluid className="login">
          <header className="login-header">Login</header>
          <LoginForm setLogin={props.setLogin}/>
        </Container>
    )
}

export default Login