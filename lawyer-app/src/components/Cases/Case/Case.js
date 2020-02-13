import React from 'react';
import { Button, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Preloader from '../../common/Preloader';


const Case = (props) => {
  if(!props.caseElement) {
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
          <ListGroupItem>First name: {props.caseElement.firstName}</ListGroupItem>
          <ListGroupItem>Second name: {props.caseElement.secondName}</ListGroupItem>
          <ListGroupItem>Date of birth: {props.caseElement.dob}</ListGroupItem>
          <ListGroupItem>Adress: {props.caseElement.adress}</ListGroupItem>
          <ListGroupItem>Description: {props.caseElement.description}</ListGroupItem>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger">Delete</Button>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default Case;
