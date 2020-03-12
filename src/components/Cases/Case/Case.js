import React, { useState } from 'react';
import { Button, ButtonGroup, Card, ListGroupItem, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Preloader from '../../common/Preloader';

const Case = (props) => {

  const [editMode = false, setEditMode] = useState();

  if (!props.caseElement) {
    return <Preloader />
  }
  return (
    <div>
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
                  First name: {props.caseElement.firstName}
                </ListGroup.Item>
                :
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>First name: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={props.caseElement.firstName} />
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
                  <FormControl type="text" value={props.caseElement.secondName} />
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
                  <FormControl type="text" value={props.caseElement.dob}/>
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
                  <FormControl type="text" value={props.caseElement.adress} />
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
                  <FormControl type="text" value={props.caseElement.description} />
                </InputGroup>
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
          {(!editMode) 
          ?
          <Button variant="info" onClick={setEditMode}>Edit</Button>
          :
          <Button variant="success" onClick={() => {setEditMode(false)}}>Save</Button>
          }
            <Button variant="danger">Delete</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Case;
