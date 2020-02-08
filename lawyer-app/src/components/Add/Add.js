import React from 'react';
import './Add.css';
import { Modal, Button} from 'react-bootstrap';



const Add = (props) => {
  let nrRef = React.createRef();
  let firstName = React.createRef();
  let secondName = React.createRef();
  let dob = React.createRef();
  let adress = React.createRef();
  let description = React.createRef();
 

  let addCase = () => {
    props.addCase();
    props.onHide();
  }

  let onCaseChange = () => {

    let newCase = {
      nrRef: nrRef.current.value,
      firstName: firstName.current.value,
      secondName: secondName.current.value,
      dob: dob.current.value,
      adress: adress.current.value,
      description: description.current.value,
    }
    props.updateNewCase(newCase);
  }

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
          To add a new case please fill the fields below:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <div>
          <label>
            Nr ref:
        </label>
          <input onChange={onCaseChange} ref={nrRef} />
        </div>
        <div>
          <label>
            First name:
        </label>
          <input onChange={onCaseChange} ref={firstName} />
        </div>
        <div>
          <label>
            Second name:
        </label>
          <input onChange={onCaseChange} ref={secondName} />
        </div>
        <div>
          <label>
            Date of birth:
        </label>
          <input onChange={onCaseChange} ref={dob}/>
        </div>
        <div>
          <label>
            Adress:
        </label>
          <input onChange={onCaseChange} ref={adress}/>
        </div>
        <div>
          <label>
            Description:
        </label>
          <input onChange={onCaseChange} ref={description}/>
        </div>
        <div>
          <button onClick={addCase}>
            Save
        </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}


export default Add;