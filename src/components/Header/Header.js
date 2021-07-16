import React, { useState } from 'react'
import './Header.css'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = (props) => {

  const [searchingElement, setSearchingElement] = useState('')

  const handleChange = (e) => {
    setSearchingElement(e.target.value)
    let searchingCaseElement = e.target.value
    props.searchCase(searchingCaseElement, props.cases)
  }
  const searchCase = () => {
    props.searchCase(searchingElement, props.cases)
    setSearchingElement('')
  }
  return (
    <Navbar expand="lg" variant="dark" className="header">
      <Navbar.Brand className="header-brand" >LAWYER REACT APP</Navbar.Brand>
      <Link to="/cases"><Button>Cases</Button></Link>
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
          : <Link to='/login'><Button className="header-login-btn">Login</Button></Link>}
      </Nav.Link>
    </Navbar>
  )
}

export default Header