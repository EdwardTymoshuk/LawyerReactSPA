import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authMe, logOut} from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    this.props.logOut();
  }
componentDidMount() {
    this.props.authMe();
}
  render() {
    return (
      <Header {...this.props} logOut={this.logOut}/>
    )
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.name
})
  
export default connect(mapStateToProps, {authMe, logOut})(HeaderContainer);