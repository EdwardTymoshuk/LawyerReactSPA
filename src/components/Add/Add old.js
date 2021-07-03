import React, {useState} from 'react';
import './Add.css';
import { Modal, Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import {reduxForm, Field} from 'redux-form';
import { Input, Textarea, DragDrop} from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';

// import DragDrop from '../common/DragDrop/DragDrop';

const Add = (props) => {

  const addCase = (values) => {
    const {title, date, adress, firstName, secondName, dob, description, files} = values;
    props.onHide();
    props.uploadCase({title, date, adress, firstName, secondName, dob, description, files, _owner:props.name});
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
{/* <LoginReduxForm onSubmit={addCase}/> */}
<AddForm addCase={addCase}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}


const AddForm = (props) => {
  
  const onHandleChange = (e) => {
    let data = new FormData()
    let formFiles = e.target.files
    for (let i = 0; i < formFiles.length; i++) {
      data.append(`file[${i}]`, formFiles[i])
  }
  setFiles(formFiles)
  };
  
  const [files, setFiles] = useState()
const [title, setTitle] = useState()
const [date, setDate] = useState()
const [adress, setAdress] = useState()
const [firstName, setFirstName] = useState()
const [secondName, setSecondName] = useState()
const [dob, setDob] = useState()
const [description, setDescription] = useState()

const handleSubmit = (e) => {
  let mewCaseElement = { title, date, adress, firstName, secondName, dob, description, files }
console.log(mewCaseElement)
props.addCase(mewCaseElement)
}

  return (

     <Form>
        <FormGroup>
          <FormLabel>Title:</FormLabel>
          <FormControl name="title" type="text" placeholder="Case title" value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Date:</FormLabel>
        <FormControl name="date" type="date" placeholder="Case date" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Adress:</FormLabel>
        <FormControl name="adress" type="text" placeholder="Case adress" value={adress} onChange={(e) => setAdress(e.currentTarget.value)}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>First Name *:</FormLabel>
        <FormControl validate={[required]}  name="firstName" type="text" value={firstName} placeholder="Client first name" onChange={(e) => setFirstName(e.currentTarget.value)}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Second Name *:</FormLabel>
        <FormControl validate={[required]} name="secondName" type="text" value={secondName} placeholder="Client second name" onChange={(e) => setSecondName(e.currentTarget.value)}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Date of Birth:</FormLabel>
        <FormControl name="dob" type="date" placeholder="Client date of birth" value={dob} onChange={(e) => setDob(e.currentTarget.value)}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Description:</FormLabel>
        <FormControl as="textarea" col="5" name="description" type="text" value={description} placeholder="Some case description" onChange={(e) => setDescription(e.currentTarget.value)} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Files:</FormLabel>
        <FormControl name="files" type="file" multiple onChange={onHandleChange} />
        </FormGroup>
          <Button onClick={handleSubmit}>
            Save
        </Button>
        </Form>


  // // <Form onSubmit={props.handleSubmit}>
  //       <FormGroup>
  //         <FormLabel>Title:</FormLabel>
  //         <Field name="title" placeholder="Case title" component={Input}/>
  //         </FormGroup>
  //         <FormGroup>
  //         <FormLabel>Date:</FormLabel>
  //       <Field name="date" placeholder="Case date" component={Input}/>
  //       </FormGroup>
  //       <FormGroup>
  //         <FormLabel>Adress:</FormLabel>
  //       <Field name="adress" placeholder="Case adress" component={Input}/>
  //       </FormGroup>
  //       <FormGroup>
  //         <FormLabel>First Name *:</FormLabel>
  //       <Field validate={[required]} name="firstName" placeholder="Client first name" component={Input}/>
  //       </FormGroup>
  //       <FormGroup>
  //         <FormLabel>Second Name *:</FormLabel>
  //       <Field validate={[required]} name="secondName" placeholder="Client second name" component={Input}/>
  //       </FormGroup>
  //       <FormGroup>
  //         <FormLabel>Date of Birth:</FormLabel>
  //       <Field name="dob" placeholder="Client date of birth" component={Input}/>
  //       </FormGroup>
  //       <FormGroup>
  //         <FormLabel>Description:</FormLabel>
  //       <Field name="description" placeholder="Some case description" component={Textarea} />
  //       </FormGroup>
  //       <FormGroup>
  //       <FormLabel>Files:</FormLabel>
  //       <Field name="files" type="file" component={DragDrop} />
  //       </FormGroup>
  //         <Button type="submit">
  //           Save
  //       </Button>
  //       </Form>
  )
}

const LoginReduxForm = reduxForm({form: 'add'})(AddForm);


export default Add;