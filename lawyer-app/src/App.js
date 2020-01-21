import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';


const App = () => {
  return (
    <div className="App container-fluid">
      <Header className="App-header container-fluid"/>
       <Body className="container-fluid"/>
    </div>
  );
}

export default App;