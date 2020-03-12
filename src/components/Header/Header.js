import React from 'react';
import './Header.css';
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link>
            <Link to={'/'}>Cases | </Link>
            {props.isAuth 
            ? <div className="header-log"><div className="header-login">{props.name}</div><Button variant="danger" onClick={props.logOut}>Logout</Button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
           </Nav.Link>
      </Navbar>
    )
}

export default Header;