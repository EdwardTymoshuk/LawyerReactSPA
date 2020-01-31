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
          Case № {props.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <span>First name: {props.cases[props.id-1].firstName}</span><br />
        <span>Second name: {props.cases[props.id-1].secondName}</span><br />
        <span>Date of birth: {props.cases[props.id-1].birthday}</span><br />
        <span>City: {props.cases[props.id-1].city}</span><br />
        <span>Description: {props.cases[props.id-1].description}</span><br />
        <span>Files: {props.cases[props.id-1].files}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
}

export default Case;
