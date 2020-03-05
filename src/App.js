import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route } from 'react-router-dom';
import CasesContainer from "./components/Cases/CasesContainer";
import CaseContainer from "./components/Cases/Case/CaseContainer";
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div>
      <Route path="/" render={() => <CasesContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/caseElement/:caseId" render={() => <CaseContainer />} />
      </div>
    </div>

  );
}

export default App;