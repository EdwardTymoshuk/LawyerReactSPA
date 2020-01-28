import React from 'react';
import './Add.css';
import Cases from '../Cases/Cases';

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
    let caseElement = {
      id: id.current.value,
      nrRef: nrRef.current.value,
      firstName: firstName.current.value,
      secondName: secondName.current.value,
      birthday: birthday.current.value,
      city: city.current.value,
      description: description.current.value,
      files: files.current.value
    }
    props.addCase(caseElement);
  }

  let onPostChange = () => {
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
    props.updateNewCase(newCase);
  }

  return (
    <div>
      <div className="container">
        <div>
          <label>
            Id:
        </label>
          <input onChange={onPostChange} ref={id} />
        </div>
        <div>
          <label>
            Nr ref:
        </label>
          <input onChange={onPostChange} ref={nrRef} />
        </div>
        <div>
          <label>
            First name:
        </label>
          <input onChange={onPostChange} ref={firstName} />
        </div>
        <div>
          <label>
            Second name:
        </label>
          <input onChange={onPostChange} ref={secondName} />
        </div>
        <div>
          <label>
            Date of birth:
        </label>
          <input onChange={onPostChange} ref={birthday}/>
        </div>
        <div>
          <label>
            City:
        </label>
          <input onChange={onPostChange} ref={city}/>
        </div>
        <div>
          <label>
            Description:
        </label>
          <input onChange={onPostChange} ref={description}/>
        </div>
        <div>
          <label>
            files:
        </label>
          <input onChange={onPostChange} ref={files} />
        </div>

        <div>
          <button onClick={addCase}>
            Save
        </button>
        </div>
      </div>
      <Cases cases={props.cases} addCase={props.addCase} />
    </div>
  )
}


export default Add;