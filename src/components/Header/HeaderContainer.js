import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authMe, logOut} from '../../redux/authReducer';
import {searchCase, setCases} from '../../redux/casesReducer';

class HeaderContainer extends React.Component {
  logOut = () => {
    this.props.logOut();
  }
  searchCase = (searchingElement) => {
    this.props.searchCase(searchingElement)
  }
  setCases = () => {
    this.props.setCases();
  }
componentDidMount() {
    this.props.authMe();
}
  render() {
    return (
      <Header {...this.props} logOut={this.logOut} searchCase={this.searchCase} />
    )
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.name
})
  
export default connect(mapStateToProps, {authMe, logOut, searchCase, setCases})(HeaderContainer);