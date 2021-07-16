import React, { useState } from 'react'
import { Form, Button, FormGroup, Container } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { required, minLength } from '../../utils/validators/validators'
import { Input } from '../common/FormControls/FormControls'
import './Registration.css'
import PageHeader from '../common/PageHeader/PageHeader'

const minLength3 = minLength(3)
const minLength8 = minLength(8)

const Registration = (props) => {

  let [newUserName, setNewUserName] = useState('')
  let [newUserEmail, setNewUserEmail] = useState('')

  let setNewUser = (values) => {
    const { name, email, password } = values
    setNewUserName(name)
    setNewUserEmail(email)
    props.setNewUser(name, email, password)
  }
  if (props.registerValidate) return <Redirect to={{
    pathname: "/success-registration",
    state: {
      name: newUserName,
      email: newUserEmail
    }
  }}
  />
  return (
    <Container fluid className="login">
      <PageHeader header="Registration" />
      <RegistrationReduxForm onSubmit={setNewUser} registrationError={props.registrationError} />
    </Container>
  )
}

const RegistrationForm = (props) => {
  return (
    <Form className="login-form" onSubmit={props.handleSubmit}>
      <FormGroup>
        <Form.Label>Name: </Form.Label>
        <Field validate={[required, minLength3]} placeholder="Name" name="name" component={Input} />
      </FormGroup>
      <FormGroup>
        <Form.Label>Email: </Form.Label>
        <Field validate={[required]} placeholder="Email" name="email" component={Input} />
      </FormGroup>
      <FormGroup>
        <Form.Label>Password: </Form.Label>
        <Field validate={[required, minLength8]} placeholder="Password" name="password" component={Input} type="password" />
      </FormGroup>
      <FormGroup>
        <Form.Control.Feedback className="registration-form-error" type="invalid">
          {props.registrationError}
        </Form.Control.Feedback>
      </FormGroup>
      <Button className="login-btn" type="submit">Register</Button>
    </Form>
  )
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)

export default Registration