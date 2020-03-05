import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import {loginAPI} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    loginAPI.authMe().then(response => {
          let {name, email} = response.data;
          this.props.setAuthUserData(name, email);
        
    })
}
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