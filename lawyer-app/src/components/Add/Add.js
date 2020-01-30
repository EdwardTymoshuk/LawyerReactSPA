import React from 'react';
import './Add.css';
import { addCaseAC, updateNewCaseAC } from '../../redux/casesReducer';
import { Form, Modal, Button} from 'react-bootstrap';



const Add = (props) => {

  let id = React.createRef();
  let nrRef = React.createRef();
  let firstName = React.createRef();
  let secondName = React.createRef();
  let birthday = React.createRef();
  let city = React.createRef();
  let description = React.createRef();
  let files = React.createRef();

  let setId  = props.store.getState().cases.length + 1; 

  let addCase = () => {
    props.store.dispatch(addCaseAC());
    
  }

  let onCaseChange = () => {
    let newCase = {
      id: setId,
      nrRef: setId,
      firstName: firstName.current.value,
      secondName: secondName.current.value,
      birthday: birthday.current.value,
      city: city.current.value,
      description: description.current.value,
      files: files.current.value
    }
    props.store.dispatch(updateNewCaseAC(newCase));
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
          <input onChange={onCaseChange} ref={birthday}/>
        </div>
        <div>
          <label>
            City:
        </label>
          <input onChange={onCaseChange} ref={city}/>
        </div>
        <div>
          <label>
            Description:
        </label>
          <input onChange={onCaseChange} ref={description}/>
        </div>
        <div>
          <label>
            files:
        </label>
          <input onChange={onCaseChange} ref={files} />
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