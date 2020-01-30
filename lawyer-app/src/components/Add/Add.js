import React from 'react';
import './Add.css';
import Cases from '../Cases/Cases';
import { addCaseAC, updateNewCaseAC } from '../../redux/state';



const Add = (props) => {

  let id = React.createRef();
  let nrRef = React.createRef();
  let firstName = React.createRef();
  let secondName = React.createRef();
  let birthday = React.createRef();
  let city = React.createRef();
  let description = React.createRef();
  let files = React.createRef();

  let addCase = () => {
    // let caseElement = {
    //   id: id.current.value,
    //   nrRef: nrRef.current.value,
    //   firstName: firstName.current.value,
    //   secondName: secondName.current.value,
    //   birthday: birthday.current.value,
    //   city: city.current.value,
    //   description: description.current.value,
    //   files: files.current.value
    // }
    props.dispatch(addCaseAC());
    
  }

  let onCaseChange = () => {
    let newCase = {
      id: id.current.value,
      nrRef: nrRef.current.value,
      firstName: firstName.current.value,
      secondName: secondName.current.value,
      birthday: birthday.current.value,
      city: city.current.value,
      description: description.current.value,
      files: files.current.value
    }
    props.dispatch(updateNewCaseAC(newCase));
  }

  return (
    <div>
      <div className="container">
        <div>
          <label>
            Id:
        </label>
          <input onChange={onCaseChange} ref={id} required/>
        </div>
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
      </div>
    </div>
  )
}


export default Add;