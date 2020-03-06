import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
<<<<<<< HEAD
import { Route, Router, Switch} from 'react-router-dom';
import CasesContainer from "./components/Cases/CasesContainer";
import CaseContainer from "./components/Cases/Case/CaseContainer";
import LoginContainer from './components/Login/LoginContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
     <Switch>
        <Route exact path="/" render={() => <CasesContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/caseElement/:caseId" render={() => <CaseContainer />} />
      </Switch>
    </div>

=======
import { Route } from 'react-router-dom';
import CasesContainer from "./components/Cases/CasesContainer";
import CaseContainer from "./components/Cases/Case/CaseContainer";

const App = () => {
  return (
      <div className="App">
          <HeaderContainer />
          <div>
          <Route path="/" render={() => <CasesContainer />} />
          <Route path="/caseElement/:caseId" render={() => <CaseContainer />} />
          </div>
      </div>
  
>>>>>>> cbd5929967377398aa68f617e0072a6020eb4009
  );
}

export default App;