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
    <span>First name: {props.cases[0].firstName}</span><br />
        <span>Second name: {props.cases[0].secondName}</span><br />
        <span>Date of birth: {props.cases[0].dob}</span><br />
        <span>Adress: {props.cases[0].adress}</span><br />
        <span>Description: {props.cases[0].description}</span><br />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
}

export default Case;
