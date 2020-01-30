import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Cases from './components/Cases/Cases';
import Case from './components//Cases/Case/Case';
import Add from './components/Add/Add';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cases" render={() => <Cases cases={props.store.getState().cases} dispatch={props.store.dispatch.bind(props.store)} />} />
          <Route path="/case" render={() => <Case cases={props.store.getState().cases}/>} />
          <Route path="/add" render={() => <Add
            dispatch={props.store.dispatch.bind(props.store)}
            cases={props.store.getState().cases}
            newCase={props.store.getState().newCase}
            />} />
          <Route path="/" render={() => <Body />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;