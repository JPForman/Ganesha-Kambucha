import React from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import Brews from './Brews';
import Header from './Header';
import NewKombucha from './NewKombucha';
import UpdateKombucha from './UpdateKombucha';
import Error404 from './Error404';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Brews} />
        <Route exact path="/NewKombucha" component={NewKombucha} />
        <Route exact path="/UpdateKombucha" component={UpdateKombucha} />
        <Route component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
