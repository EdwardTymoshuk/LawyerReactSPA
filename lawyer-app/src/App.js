import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import Cases from './components/Cases/Cases';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Route path="/" render={() => <Cases store={props.store}/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;