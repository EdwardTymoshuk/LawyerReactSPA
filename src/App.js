import React, { Suspense } from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import CasesContainer from './components/Cases/CasesContainer'
import LoginContainer from './components/Login/LoginContainer'
import Preloader from './components/common/Preloader/Preloader'

const CaseContainer = React.lazy(() => import('./components/Cases/Case/CaseContainer'))
const RegistrationMessage = React.lazy(() => import('./components/Registration/RegistrationMessage'))
const RegistrationContainer = React.lazy(() => import('./components/Registration/RegistrationContainer'))

const App = ({ history, ...props }) => {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact history={history} path="/cases" render={() => <CasesContainer />} />
        <Route exact history={history} path="/login" render={() => <LoginContainer />} />
        <Route history={history} path="/registration" render={() => <Suspense fallback={<Preloader />}><RegistrationContainer /></Suspense>} />
        <Route history={history} path="/success-registration" render={() => <Suspense fallback={<Preloader />}><RegistrationMessage /></Suspense>} />
        <Route history={history} path="/cases/:caseId" render={() => <Suspense fallback={<Preloader />}><CaseContainer /></Suspense>} />
        <Redirect from="/" to="/cases" />
      </Switch>
    </div>

  )
}

export default withRouter(App)