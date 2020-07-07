import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route,Switch, Redirect} from 'react-router-dom';
import CasesContainer from './components/Cases/CasesContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/common/Preloader/Preloader';

const CaseContainer = React.lazy(() => import('./components/Cases/Case/CaseContainer'))
const RegistrationMessage = React.lazy(() => import('./components/Registration/RegistrationMessage'))
const RegistrationContainer = React.lazy(() => import('./components/Registration/RegistrationContainer'))

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
     <Switch>
        <Route exact path="/" render={() => <Redirect to="/cases" />} />
        <Route exact path="/cases" render={() => <CasesContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/registration" render={() => <Suspense fallback={<Preloader />}><RegistrationContainer /></Suspense>} />
        <Route path="/success-registration" render={() => <Suspense fallback={<Preloader />}><RegistrationMessage /></Suspense>} />
        <Route path="/cases/:caseId" render={() => <Suspense fallback={<Preloader />}><CaseContainer /></Suspense>} />
      </Switch>
    </div>

  );
}

export default App;