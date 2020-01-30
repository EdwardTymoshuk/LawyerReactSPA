import React from 'react';
import { Card, CardDeck, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Cases.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Add from '../Add/Add';
import Case from '../Cases/Case/Case';

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
                        
                        props.store.getState().cases.map((item) => {
                            return <Card key={item.id ? item.id : 1}>
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
                            </Card>
                        })
                    }
                </CardDeck>
                <div>
                    <Button onClick={setCaseAdd} variant="light" > <FontAwesomeIcon icon={faPlus} size="5x" /></Button>

                    <Add show={caseAdd} onHide={() => setCaseAdd(false)} store={props.store}/>
                    <Case show={caseShow} onHide={() => setCaseShow(false)} store={props.store} />
                </div>
            </div>
        </div>
    )


}

export default Cases;