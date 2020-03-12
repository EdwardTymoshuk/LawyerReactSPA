import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './Login.css';

const Login = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  return (
        <div className="login-form">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="string" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" onClick={() => props.setLogin(email, password)}>
    Submit
  </Button>
</Form>
        </div>
    )
}
export default Login;