import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route,Switch} from 'react-router-dom';
import CasesContainer from './components/Cases/CasesContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/common/Preloader';

const CaseContainer = React.lazy(() => import('./components/Cases/Case/CaseContainer'))

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
     <Switch>
        <Route exact path="/" render={() => <CasesContainer />} />
        <Route exact path="/cases" render={() => <CasesContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/cases/:caseId" render={() => <Suspense fallback={<Preloader />}><CaseContainer /></Suspense>} />
      </Switch>
    </div>

  );
}

export default App;