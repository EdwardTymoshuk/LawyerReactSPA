import React from 'react';
import './Add.css';
import { Modal, Button} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';

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
  <form onSubmit={props.handleSubmit}>
        <div>
          <label>
           Title:
        </label>
          <Field name="title" placeholder="Case title" component="input"/>
        </div>
        <div>
          <label>
           Date:
        </label>
        <Field name="date" placeholder="Case date" component="input"/>
        </div>
        <div>
          <label>
            Adress:
        </label>
        <Field name="adress" placeholder="Case adress" component="input"/>
        </div>
        <div>
          <label for="firstName">
            First name:
        </label>
        <Field name="firstName" placeholder="Client first name" component="input"/>
        </div>
        <div>
          <label>
            Second name:
        </label>
        <Field name="secondName" placeholder="Client second name" component="input"/>
        </div>
        <div>
          <label>
            Date of birth:
        </label>
        <Field name="dob" placeholder="Client date of birth" component="input"/>
        </div>
        <div>
          <label>
            Description:
        </label>
        <Field name="description" placeholder="Some case description" component="textarea"/>
        </div>
        <div>
          <button type="submit">
            Save
        </button>
        </div>
        </form>
  )
}

const LoginReduxForm = reduxForm({form: 'add'})(AddForm);


export default Add;