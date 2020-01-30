import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <NavLink className="mx-auto" to="/cases">
                        <FontAwesomeIcon icon={faPowerOff} size="3x"/>
            </NavLink>  
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header;