import React from 'react';
import {Card, CardDeck, ListGroup, ListGroupItem, Button, ButtonGroup} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Cases.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Cases = (props) => {

    return (
        <div className="cases">
            <header className="cases-header">
                Here are all of your cases:
            </header>
            <div>
                <CardDeck >
                    {
                        props.cases.map((item) => {
                            return <Card key={item.id !== undefined ? item.id : 1}>
                            <Card.Header>
                              No of case: {item.nrRef}
                            </Card.Header>
                            <ListGroup className="list-group-flush">
                        <ListGroupItem>Name: {item.firstName}</ListGroupItem>
                            <ListGroupItem>secondName: {item.secondName}</ListGroupItem>
                            <ListGroupItem>City: {item.city}</ListGroupItem>
                          </ListGroup>
                          <Card.Body>
                          <ButtonGroup>
                            <Button variant="primary"><NavLink to={"/case/" + item.id}>Show</NavLink></Button>
                            <Button variant="danger">Edit</Button>
                          </ButtonGroup>
                            </Card.Body>
                          </Card> 
                        })
                    }
                </CardDeck>
                <div>
                <NavLink to="/add">
                    <FontAwesomeIcon icon={faPlus} size="5x"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )


}

export default Cases;