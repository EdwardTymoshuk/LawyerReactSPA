import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/auth/me', {
    headers: {
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU2OGI3ZGVhNWE4MzQxM2U0M2RjMTIiLCJpYXQiOjE1ODMwODU3NDN9.xX8_VysEZVWlYVLItbV-Azk88ZT772zjyn0PxyZ0x9Q'
    }
  }
    ).then(response => {
          console.log(response);
          let {name, email} = response.data;
          this.props.setAuthUserData(name, email);
        
    })
}
//   componentDidUpdate() {
//     console.log(this.props)
// }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.name
})
  
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);