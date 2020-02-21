import React from "react";
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AddContainer from '../Add/AddContainer';
import './Cases.css';

const Cases = (props) => {
    const [caseAdd, setCaseAdd] = React.useState(false);
    return (
        <div className="cases">
            <header className="cases-header">
                Here are all of your cases:
            </header>
            <div className="cases-btn">
                <Button onClick={setCaseAdd} variant="light" ><FontAwesomeIcon icon={faPlus} size="5x" /></Button>
            </div>
            <div className="cases-body">
                {
                    props.cases.map((item) => {
                        return <Card key={item._id}>
                            <Card.Header>
                                No of case: {item.nrRef}
                            </Card.Header>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Name: {item.firstName}</ListGroupItem>
                                <ListGroupItem>Second name: {item.secondName}</ListGroupItem>
                                <ListGroupItem>Adress: {item.adress}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <ButtonGroup>
                                    <Button variant="primary" ><NavLink to={"/caseElement/" + item._id}>Show</NavLink></Button>
                                    <Button variant="danger">Edit</Button>
                                </ButtonGroup>
                            </Card.Body>
                            
                            <AddContainer show={caseAdd} onHide={() => setCaseAdd(false)} cases={props.cases} />
                        </Card>
                    })
                }
                <div>
                </div>
            </div>
        </div>
    )
}

export default Cases;