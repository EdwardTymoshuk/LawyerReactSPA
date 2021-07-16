import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { authMe, logOut } from '../../redux/authReducer'
import { searchCase, setCases } from '../../redux/casesReducer'

const HeaderContainer = (props) => {

  const logOut = () => {
    props.logOut()
  }
  
  const searchCase = (searchingElement, cases) => {
    props.searchCase(searchingElement, cases)
  }

  return (
    <Header {...props} logOut={logOut} searchCase={searchCase} cases={props.cases} isAuth={props.isAuth} />
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.name,
  cases: state.casesPage.cases
})

export default connect(mapStateToProps, { authMe, logOut, searchCase, setCases })(HeaderContainer)