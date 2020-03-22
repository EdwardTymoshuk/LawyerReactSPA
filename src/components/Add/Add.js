import React from 'react';
import './Add.css';
import { Modal, Button} from 'react-bootstrap';

let newCase;

const Add = (props) => {
  let title = React.createRef();
  let date = React.createRef();
  let adress = React.createRef();
  let firstName = React.createRef();
  let secondName = React.createRef();
  let dob = React.createRef();
  let description = React.createRef();
 

  const addCase = () => {
    props.onHide();
    props.uploadCase(newCase);
    }

  const onCaseChange = () => {
    newCase = {
      title: title.current.value,
      date: date.current.value,
      adress: adress.current.value,
      firstName: firstName.current.value,
      secondName: secondName.current.value,
      dob: dob.current.value,
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

<form>
        <div>
          <label>
           Title:
        </label>
          <input onChange={onCaseChange} ref={title} />
        </div>
        <div>
          <label>
           Date:
        </label>
          <input onChange={onCaseChange} ref={date} />
        </div>
        <div>
          <label>
            Adress:
        </label>
          <input onChange={onCaseChange} ref={adress}/>
        </div>
        <div>
          <label for="firstName">
            First name:
        </label>
          <input if="firstName" onChange={onCaseChange} ref={firstName} required/>
        </div>
        <div>
          <label>
            Second name:
        </label>
          <input onChange={onCaseChange} ref={secondName} required/>
        </div>
        <div>
          <label>
            Date of birth:
        </label>
          <input onChange={onCaseChange} ref={dob}/>
        </div>
        <div>
          <label>
            Description:
        </label>
          <input onChange={onCaseChange} ref={description}/>
        </div>
        <div>
          <button type="submit" onClick={addCase}>
            Save
        </button>
        </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}


export default Add;