import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import CasesContainer from "./components/Cases/CasesContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Route path="/" render={() => <CasesContainer state={props.store.getState()}/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;