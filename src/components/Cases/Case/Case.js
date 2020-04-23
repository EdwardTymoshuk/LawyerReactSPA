import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Preloader from '../../common/Preloader/Preloader';
import './Case.css';
import { Redirect } from 'react-router-dom';


const Case = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [adress, setAdress] = useState();
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [dob, setDob] = useState();
  const [description, setDescription] = useState();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    setTitle(props.caseElement.title);
    setDate(props.caseElement.date);
    setAdress(props.caseElement.adress);
    setFirstName(props.caseElement.firstName);
    setSecondName(props.caseElement.secondName);
    setDob(props.caseElement.dob);
    setDescription(props.caseElement.description);
  }, [props.caseElement])

  const updateCase = () => {
    let mewCaseElement = { title, date, adress, firstName, secondName, dob, description };
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
      <header className="case-element-header">
      <span>CASE №</span> {props.caseElement._id}
      </header>
      <Card>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>Title:</span> {props.caseElement.title && title}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Title: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>Date:</span> {props.caseElement.date && date}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Date: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={date.split('T')[0]} onChange={(e) => setDate(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>Adress:</span> {props.caseElement.adress}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Adress: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={adress} onChange={(e) => setAdress(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>First name:</span> {props.caseElement.firstName && firstName}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>First name: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>Second name:</span> {props.caseElement.secondName}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Second name: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={secondName} onChange={(e) => setSecondName(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>Date of birth:</span> {props.caseElement.dob}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Date of birth: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={dob && dob.split('T')[0]} onChange={(e) => setDob(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item as="div">
              {(!editMode)
                ?
                <ListGroup.Item>
                  <span>Description:</span> {props.caseElement.description}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Description: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
                </InputGroup>
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {(!editMode)
              ?
              <Button className="case-element-btn-edit" onClick={() => { setEditMode(true) }}>Edit</Button>
              :
              <Button className="case-element-btn-save" onClick={updateCase}>Save</Button>
            }
            <Button className="case-element-btn-delete" variant="danger" onClick={deleteCase}>Delete</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Case;
