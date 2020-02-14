import React from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import NewKombucha from './NewKombucha';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/NewKombucha" component={NewKombucha} />
      </Switch>
    </div>
  );
}

export default App;
