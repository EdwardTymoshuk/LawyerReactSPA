import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Cases from './components/Body/Cases/Cases';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/home" render={() => <Body />}/>
      <Route path="/cases" render={() => <Cases />}/>
    </div>
  );
}

export default App;