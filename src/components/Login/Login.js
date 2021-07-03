import React, { useState } from 'react';
import {Form, Button, FormGroup, Container} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';
import {Redirect, NavLink} from 'react-router-dom';
import './Login.css';
import { required, minLength } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';

const minLength8 = minLength(8);


const Login = (props) => {

  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  let setLogin = (email, password) => {
    props.setLogin(email, password)
  }

  if (props.isAuth) return <Redirect to="/cases" />
  return (
        <Container fluid className="login">
          <header className="login-header">Login</header>
          <LoginForm setEmail={setEmail} setPassword={setPassword} email={email} password={password} setLogin={setLogin}/>
        </Container>
    )
}

const LoginForm = (props) => {
  return (
    // <div>
    // <Form className="login-form" onSubmit={props.handleSubmit}>
    //   <FormGroup>
    //    <Form.Label>Email: </Form.Label>
    //   <Field validate={[required]} placeholder="Email" name="email" component={Input} />
    //   </FormGroup>
    //   <FormGroup>
    //   <Form.Label>Password: </Form.Label>
    //     <Field validate={[required, minLength8]} placeholder="Password" name="password" component={Input} type="password" />
    //     </FormGroup>
    //     <FormGroup>
    //     <Form.Control.Feedback className="login-form-error" type="invalid">
    //             {props.loginError}
    //           </Form.Control.Feedback>
    //     </FormGroup>
    //   <Button className="login-btn" type="submit">Login</Button>
    // </Form>
    // <div>If you don`t have an account, please <NavLink to='/registration'>click here</NavLink></div>
    // </div>
    <form className="login-form">
      <label for="email">Email:</label>
<input placeholder="Email" name="email" validate={[required]} onChange={e => props.setEmail(e.target.value)}/>
<label for="password">Password:</label>
<input placeholder="Password" name="password" type="password" validate={[required]} onChange={e => props.setPassword(e.target.value)}/>
<button onClick={() => props.setLogin(props.email, props.password)}>Login</button>
    </form>
  )
}

// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;