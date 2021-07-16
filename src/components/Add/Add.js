import React from 'react'
import './Add.css'
import { Modal, Button } from 'react-bootstrap'
import AddForm from './AddForm'

const Add = (props) => {
  
  const addCase = (values) => {
    const { title, date, adress, firstName, secondName, dob, description } = values
    props.onHide()
    props.uploadCase({ title, date, adress, firstName, secondName, dob, description, _owner: props.name })
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
        <AddForm addCase={addCase} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Add