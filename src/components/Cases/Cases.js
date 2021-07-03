import React, {useState} from "react"
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import AddContainer from '../Add/AddContainer'
import './Cases.css'
import { useEffect } from "react"

const Cases = (props) => {
    const [caseAdd, setCaseAdd] = useState(false)

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
                    props.cases.map(item => {     
                        if ((item._owner === props.name)) {       
                        return <Card key={item._id}>
                            <Card.Header>
                                <span>No of case:</span> {item._id}
                            </Card.Header>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><span>Title:</span> {item.title}</ListGroupItem>
                                <ListGroupItem><span>Date:</span> {!!item.date && item.date.split('T')[0]}</ListGroupItem>
                                <ListGroupItem><span>First name:</span> {item.firstName}</ListGroupItem>
                                <ListGroupItem><span>Second name:</span> {item.secondName}</ListGroupItem>
                                <ListGroupItem><span>Adress:</span> {item.adress}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <ButtonGroup>
                                    <Button variant="primary"><NavLink to={"/cases/" + item._id}>Show</NavLink></Button>
                                </ButtonGroup>
                            </Card.Body>                    
                        </Card>
                        }
                    })
                }
                </div>
        </div>
    )
}

export default Cases