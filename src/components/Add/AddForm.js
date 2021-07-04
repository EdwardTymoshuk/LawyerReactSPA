import React, {useState} from 'react'
import {reduxForm, Field} from 'redux-form'
import { Modal, Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import { Input, Textarea, DragDrop, FileInput} from '../common/FormControls/FormControls'
import { required } from '../../utils/validators/validators'

const LoginReduxFrom = (props) => {
  
// const [files, setFiles] = useState()
//   const [title, setTitle] = useState()
//   const [date, setDate] = useState()
//   const [adress, setAdress] = useState()
//   const [firstName, setFirstName] = useState()
//   const [secondName, setSecondName] = useState()
//   const [dob, setDob] = useState()
//   const [description, setDescription] = useState()

// const onHandleSubmit = (values) => {
//   //   const {title, date, adress, firstName, secondName, dob, description} = values
//   //   const formData = new FormData()
//   // formData.append("title",title)
//   // formData.append("date", date)
//   // formData.append("adress", adress)
//   // formData.append("firstName", firstName)
//   // formData.append("secondName", secondName)
//   // formData.append("dob", dob)
//   // formData.append("description", description)
//   // formData.append("files", files)
//     console.log(values)
//     props.addCase(values)
// }

  return (
    <Form onSubmit={props.handleSubmit(values => props.addCase(values))}>
          <FormGroup>
            <FormLabel>Title:</FormLabel>
            <Field name="title" placeholder="Case title" component={Input}/>
            </FormGroup>
            <FormGroup>
            <FormLabel>Date:</FormLabel>
          <Field name="date" type="date" placeholder="Case date" component={Input}/>
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
          <Field name="dob" type="date" placeholder="Client date of birth" component={Input}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Description:</FormLabel>
          <Field name="description" placeholder="Some case description" component={Textarea} />
          </FormGroup>
          <FormGroup>
          <FormLabel>Files:</FormLabel>
          <Field name="files" multiple component={FileInput} id="file-uploader"/>
          </FormGroup>
            <Button type="submit">
              Save
          </Button>
          </Form>
  )
  }

const AddForm = reduxForm({form: 'add'})(LoginReduxFrom)

export default AddForm
  
  