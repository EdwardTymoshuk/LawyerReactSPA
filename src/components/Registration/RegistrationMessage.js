import React from 'react';
import {Container} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';

const RegistrationMessage = () => {

  let location = useLocation();

  return (
        <Container className="registration-message">
          <Container className="registration-message-container">
          <header className="registration-message-header">Congratulation, <strong>{location.state.name}</strong>!</header>
          <span className="registration-message-span">Your account with email: <strong>{location.state.email}</strong> was successfully registered. Now you can {<NavLink to="/login">login</NavLink>} to your account.</span>
          </Container>
        </Container>
    )
}

export default RegistrationMessage;