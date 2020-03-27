import React, { useState } from 'react';
import './Header.css';
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

const Header = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
    return (
        <Navbar expand="lg" variant="dark" fixed="top" className="header">
        <Navbar.Brand className="header-brand" >LAWYER REACT APP</Navbar.Brand>
        <Nav.Link className="header-cases"><Button><Link to={'/'}>Cases</Link></Button></Nav.Link>
          <Form inline className="header-search">
            {
            <FormControl type="text" placeholder="Search" className={`mr-sm-2 header-search-input ${openSearch ? "header-search-visible" : "header-search-hiden"}`} />
          }
            <Button className="header-search-btn" onClick={() => setOpenSearch(!openSearch)}>Search</Button>
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