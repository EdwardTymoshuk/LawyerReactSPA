import React, { useState } from 'react';
import './Header.css';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router'

const Header = (props) => {

  const {push} = useHistory()
  const [searchingElement, setSearchingElement] = useState('')

  const handleChange = (e) => {
    setSearchingElement(e.target.value)
    let searchingCaseElement = e.target.value
    props.searchCase(searchingCaseElement)
  }
  const searchCase = () => {
    props.searchCase(searchingElement)
    setSearchingElement('')
  }
  const setCases = () => {
    props.setCases()
    push('/')
  }
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="header">
      <Navbar.Brand className="header-brand" >LAWYER REACT APP</Navbar.Brand>
      <Nav.Link className="header-cases"><Button onClick={setCases}>Cases</Button></Nav.Link>
      <Form inline className="header-search">
        {
          props.isAuth
            ?
            <FormControl
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            :
            <FormControl className="header-search-disabled"
              disabled
            />
        }
        <Button className="header-search-btn" onClick={searchCase}>Search</Button>
      </Form>
      <Nav.Link className="header-login">
        {props.isAuth
          ? <div><div className="header-login-greating">Nice to see you, {props.name}!</div><Button className="header-logout-btn" onClick={props.logOut}>Logout</Button></div>
          : <Button className="header-login-btn" onClick={() => push('/login')}>Login</Button>}
      </Nav.Link>
    </Navbar>
  )
}

export default Header;