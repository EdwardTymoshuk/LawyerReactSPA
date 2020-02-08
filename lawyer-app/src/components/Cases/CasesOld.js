import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Cases.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Case from './Case/Case';
import AddContainer from '../Add/AddContainer';
import * as axios from 'axios';

const CasesOld = (props) => {
    
    const [caseAdd, setCaseAdd] = React.useState(false);
    const [caseShow, setCaseShow] = React.useState(false);

    let getUsers = () => {
    if (props.cases.length === 0) {
    axios.get('http://localhost:3000/cases').then ( response => {
        props.setCases(response.data);
    }
    )
}
}
    return (
        console.log(props),
        <div className="cases">
        <header className="cases-header">
            Here are all of your cases:
    </header>
        <div className="cases-btn">
            <Button onClick={e => this.showAddModal()} variant="light" ><FontAwesomeIcon icon={faPlus} size="5x" /></Button>
        </div>
        <div className="cases-body">
            {
                this.props.cases.map((item) => {
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
                                <Button onClick={e => this.showCasesModal()} variant="primary" ><NavLink to={"/case" + item.id}>Show</NavLink></Button>
                                <Button variant="danger">Edit</Button>
                            </ButtonGroup>
                        </Card.Body>
                        <Case show={this.state.showCases}
                            onClose={this.showCasesModal}
                            cases={this.props.cases}
                            id={item._id}
                        />
                        <AddContainer show={this.state.showAdd}
                            onClose={this.showAddModal}
                            cases={this.props.cases} />
                    </Card>

                })

            }
        </div>
    </div>
    )


}

export default Cases;