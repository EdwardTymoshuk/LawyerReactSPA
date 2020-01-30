import React from 'react';
import { Form, Modal, Button} from 'react-bootstrap';


const Case = (props) => {
    return (
      <div> 
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Case № {props.store.getState().cases[0].id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <span>First name: {props.store.getState().cases[0].firstName}</span><br />
        <span>Second name: {props.store.getState().cases[0].secondName}</span><br />
        <span>Date of birth: {props.store.getState().cases[0].birthday}</span><br />
        <span>City: {props.store.getState().cases[0].city}</span><br />
        <span>Description: {props.store.getState().cases[0].description}</span><br />
        <span>Files: {props.store.getState().cases[0].files}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
}

export default Case;
