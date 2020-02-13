import React from 'react';
import './Header.css';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar>
    )
}

export default Header;