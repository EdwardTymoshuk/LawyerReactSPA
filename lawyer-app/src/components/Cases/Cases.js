import React from 'react';
import { Card, CardDeck, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Cases.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Case from '../Cases/Case/Case';
import AddContainer from '../Add/AddContainer';

const Cases = (props) => {
    const [caseAdd, setCaseAdd] = React.useState(false);
    const [caseShow, setCaseShow] = React.useState(false);

    return (
        <div className="cases">
            <header className="cases-header">
                Here are all of your cases:
            </header>
            <div>
                <CardDeck >
                    {
                        props.store.getState().casesReducer.cases.map((item) => {

                            return <Card key={item.id}>
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
                                        <Button onClick={setCaseShow}  variant="primary" ><NavLink to={"/case" + item.id}>Show</NavLink></Button>
                                        <Button variant="danger">Edit</Button>
                                    </ButtonGroup>
                                </Card.Body>
                                <Case show={caseShow} 
                                onHide={() => setCaseShow(false)} 
                                cases={props.store.getState().casesReducer.cases}
                                id={item.id} 
                                />
                            </Card>
                            
                        })
                    }
                </CardDeck>
                <div>
                    <Button onClick={setCaseAdd} variant="light" > <FontAwesomeIcon icon={faPlus} size="5x" /></Button>

                    <AddContainer show={caseAdd} onHide={() => setCaseAdd(false)} store={props.store}/>
                </div>
            </div>
        </div>
    )


}

export default Cases;