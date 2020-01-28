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
          <Route path="/cases" render={() => <Cases cases={props.store.getState().cases} addCase={props.store.addCase.bind(props.store)} />} />
          <Route path="/case" render={() => <Case cases={props.store.getState().cases}/>} />
          <Route path="/add" render={() => <Add
            addCase={props.store.addCase.bind(props.store)}
            cases={props.store.getState().cases}
            newCase={props.store.getState().newCase}
            updateNewCase={props.store.updateNewCase.bind(props.store)} />} />
          <Route path="/" render={() => <Body />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;