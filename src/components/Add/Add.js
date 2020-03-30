import React from 'react';
import './Add.css';
import { Modal, Button, Form, FormGroup, FormLabel} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';
import { Input, Textarea } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';

const Add = (props) => {

  const addCase = (values) => {
    const {title, date, adress, firstName, secondName, dob, description} = values;
    props.onHide();
    props.uploadCase({title, date, adress, firstName, secondName, dob, description});
    }

  return (
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          To add a new case please fill the fields below:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
<LoginReduxForm onSubmit={addCase}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const AddForm = (props) => {
  return (
  <Form onSubmit={props.handleSubmit}>
        <FormGroup>
          <FormLabel>Title:</FormLabel>
          <Field name="title" placeholder="Case title" component={Input}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Date:</FormLabel>
        <Field name="date" placeholder="Case date" component={Input}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Adress:</FormLabel>
        <Field name="adress" placeholder="Case adress" component={Input}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>First Name *:</FormLabel>
        <Field validate={[required]} name="firstName" placeholder="Client first name" component={Input}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Second Name *:</FormLabel>
        <Field validate={[required]} name="secondName" placeholder="Client second name" component={Input}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Date of Birth:</FormLabel>
        <Field name="dob" placeholder="Client date of birth" component={Input}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Description:</FormLabel>
        <Field name="description" placeholder="Some case description" component={Textarea}/>
        </FormGroup>
          <Button type="submit">
            Save
        </Button>
        </Form>
  )
}

const LoginReduxForm = reduxForm({form: 'add'})(AddForm);


export default Add;