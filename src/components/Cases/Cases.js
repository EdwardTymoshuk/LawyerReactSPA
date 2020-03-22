import React from "react";
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AddContainer from '../Add/AddContainer';
import './Cases.css';

const Cases = (props) => {
    const [caseAdd, setCaseAdd] = React.useState(false);
    if (caseAdd) return <AddContainer show={caseAdd} onHide={() => setCaseAdd(false)} cases={props.cases} />
    return (
        <div className="cases">
            <header className="cases-header">
                ALL CASES
            </header>
            <div>
                <Button className="cases-btn" onClick={() => setCaseAdd(true)} variant="light"><FontAwesomeIcon icon={faPlus} size="5x" /></Button>
            </div>
            <div className="cases-body">
                {
                    props.cases.map((item) => {
                        return <Card key={item._id}>
                            <Card.Header>
                                No of case: {item._id}
                            </Card.Header>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Title: {item.title}</ListGroupItem>
                                <ListGroupItem>Date: {item.date}</ListGroupItem>
                                <ListGroupItem>First name: {item.firstName}</ListGroupItem>
                                <ListGroupItem>Second name: {item.secondName}</ListGroupItem>
                                <ListGroupItem>Adress: {item.adress}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <ButtonGroup>
                                    <Button variant="primary"><NavLink to={"/cases/" + item._id}>Show</NavLink></Button>
                                </ButtonGroup>
                            </Card.Body>                    
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