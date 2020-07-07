import React from 'react';
import {Form, Button, FormGroup, Container} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';
import {Redirect, NavLink} from 'react-router-dom';
import './Login.css';
import { required, minLength } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';

const minLength8 = minLength(8);

const Login = (props) => {

  let setLogin = (values) => {
    const {email, password} = values
    props.setLogin(email, password)

  }

  if (props.isAuth) return <Redirect to="/cases" />
  return (
        <Container fluid className="login">
          <header className="login-header">Login</header>
          <LoginReduxForm onSubmit={setLogin} loginError={props.loginError}/>
        </Container>
    )
}

const LoginForm = (props) => {
  return (
    <div>
    <Form className="login-form" onSubmit={props.handleSubmit}>
      <FormGroup>
       <Form.Label>Email: </Form.Label>
      <Field validate={[required]} placeholder="Email" name="email" component={Input} />
      </FormGroup>
      <FormGroup>
      <Form.Label>Password: </Form.Label>
        <Field validate={[required, minLength8]} placeholder="Password" name="password" component={Input} type="password" />
        </FormGroup>
        <FormGroup>
        <Form.Control.Feedback className="login-form-error" type="invalid">
                {props.loginError}
              </Form.Control.Feedback>
        </FormGroup>
      <Button className="login-btn" type="submit">Login</Button>
    </Form>
    <div>If you don`t have an account, please <NavLink to='/registration'>click here</NavLink></div>
    </div>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;