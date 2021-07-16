import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setNewUserData } from '../../redux/authReducer'
import Registration from './Registration'

const RegistrationContainer = (props) => {

  const [registrationError, setRegistrationError] = useState('')
  
  const setNewUser = (name, email, password) => {
    props.setNewUserData(name, email, password).then(response =>
      setRegistrationError(response)
    )
  }
  return (
    <Registration {...props} setNewUser={setNewUser} registrationError={registrationError} />
  )
}
let mapStateToProps = (state) => ({
  registerValidate: state.auth.registerValidate

})
export default connect(mapStateToProps, { setNewUserData })(RegistrationContainer)