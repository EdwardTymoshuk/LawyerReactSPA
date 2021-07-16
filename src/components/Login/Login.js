import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect} from 'react-router-dom'
import './Login.css'
import LoginForm from './LoginForm'
import PageHeader from '../common/PageHeader/PageHeader'

const Login = (props) => {

  if (props.isAuth) return <Redirect to="/cases" />
  return (
    <Container fluid className="login">
      <PageHeader header="Login" />
      <LoginForm setLogin={props.setLogin} />
    </Container>
  )
}

export default Login