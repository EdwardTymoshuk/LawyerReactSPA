import React, { useState } from 'react';
import './Header.css';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = (props) => {

  const [searchingElement, setSearchingElement] = useState('');

  const handleChange = (e) => {
    setSearchingElement(e.target.value);
    let searchingCaseElement = e.target.value;
    props.searchCase(searchingCaseElement);
  }
  const searchCase = () => {
    props.searchCase(searchingElement);
    setSearchingElement('');
  }
  const setCases = () => {
    props.setCases();
  }
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="header">
      <Navbar.Brand className="header-brand" >LAWYER REACT APP</Navbar.Brand>
      <Nav.Link className="header-cases"><Button onClick={setCases}><Link to={'/'}>Cases</Link></Button></Nav.Link>
      <Form inline className="header-search">
        {
          props.isAuth
            ?
            <FormControl
              type="text"
              placeholder="Search"
              onChange={handleChange}
              value={searchingElement}
            />
            :
            <FormControl
              disabled
            />


        }
        <Button className="header-search-btn" onClick={searchCase}>Search</Button>
      </Form>
      <Nav.Link className="header-login">
        {props.isAuth
          ? <div><div className="header-login-greating">Nice to see you, {props.name}!</div><Button className="header-logout-btn" onClick={props.logOut}>Logout</Button></div>
          : <Button className="header-login-btn"><NavLink to={'/login'}>Login</NavLink></Button>}
      </Nav.Link>
    </Navbar>
  )
}

export default Header;