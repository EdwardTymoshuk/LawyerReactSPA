import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Preloader from '../../common/Preloader';
import './Case.css';
import {Redirect} from 'react-router-dom';


const Case = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [dob, setDob] = useState();
  const [adress, setAdress] = useState();
  const [description, setDescription] = useState();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    setFirstName(props.caseElement.firstName);
    setSecondName(props.caseElement.secondName);
    setDob(props.caseElement.dob);
    setAdress(props.caseElement.adress);
    setDescription(props.caseElement.description);
  }, [props.caseElement])

  const updateCase = () => {
    let mewCaseElement = {firstName, secondName, dob, adress, description};
    props.updateCaseElement(props.caseElement._id, mewCaseElement);
    setEditMode(false);
  }
const deleteCase = () => {
  props.deleteCaseElement(props.caseElement._id);
  setDeleted(true);
}
  if (deleted) return <Redirect to="/cases" />
  if (!props.caseElement) return <Preloader />
  return (
    <div className="case-element">
      <Card>
        <Card.Header >
          Case № {props.caseElement._id}
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  First name: {props.caseElement.firstName && firstName}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>First name: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}/>
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  Second name: {props.caseElement.secondName}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Second name: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={secondName} onChange={(e) => setSecondName(e.currentTarget.value)}/>
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  Date of birth: {props.caseElement.dob}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Date of birth: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={dob} onChange={(e) => setDob(e.currentTarget.value)}/>
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  Adress: {props.caseElement.adress}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Adress: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={adress} onChange={(e) => setAdress(e.currentTarget.value)}/>
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  Description: {props.caseElement.description}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Description: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
                </InputGroup>
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
          {(!editMode) 
          ?
          <Button variant="info" onClick={() => {setEditMode(true)}}>Edit</Button>
          :
          <Button variant="success" onClick={updateCase}>Save</Button>
          }
            <Button variant="danger" onClick={deleteCase}>Delete</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Case;
