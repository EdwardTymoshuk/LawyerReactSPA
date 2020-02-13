import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import CasesContainer from "./components/Cases/CasesContainer";
import CaseContainer from "./components/Cases/Case/CaseContainer";

const App = () => {
  return (
      <div className="App">
          <Header />
          <Route path="/" render={() => <CasesContainer />} />
          <Route path="/caseElement/:caseId" render={() => <CaseContainer />} />
      </div>
  
  );
}

export default App;