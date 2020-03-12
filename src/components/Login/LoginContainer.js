import React from 'react';
import { connect } from 'react-redux';
import { setLoginData } from '../../redux/authReducer';
import Login from './Login';

class LoginContainer extends React.Component {
  setLogin = (email, password) => {
    this.props.setLoginData(email, password);
  }
  render() {
    return (
      <Login {...this.props} setLogin={this.setLogin}/>
    )
  }
}
let mapStateToProps = (state) => ({
  
} )
  export default connect(mapStateToProps, {setLoginData})(LoginContainer);