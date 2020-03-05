import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
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

  );
}

export default App;