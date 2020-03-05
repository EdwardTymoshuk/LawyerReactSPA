import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import * as axios from 'axios';
import {setAuthUserData} from '../../redux/authReducer';
import {loginAPI} from '../../api/api';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const setLoginData = () => {
    loginAPI.loginMe(email, password).then((response) => {
      if (response.status === 200) { 
        setAuthUserData(response.data.name, response.data.email);
        console.log(response)
      }
    })
  }

  return (
        <div>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" onClick={setLoginData}>
    Submit
  </Button>
</Form>
        </div>
    )
}
export default Login;