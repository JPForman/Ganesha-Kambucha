import React from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import Brews from './Brews';
import Header from './Header';
import NewKombucha from './NewKombucha';
import UpdateKombucha from './UpdateKombucha';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchaList: []
    };
    this.handleAddingNewKombuchaToList = this.handleAddingNewKombuchaToList.bind(this);
  }

  handleAddingNewKombuchaToList(newBrew) {
    var newMasterKombuchaList = this.state.masterKombuchaList.slice();
    newMasterKombuchaList.push(newBrew);
    this.setState({masterKombuchaList: newMasterKombuchaList});
    console.log(this.state);
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Brews} />
        <Route exact path="/NewKombucha" render={()=><NewKombucha onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />} />
        <Route exact path="/UpdateKombucha" component={UpdateKombucha} />
        <Route component={Error404} />

      </Switch>
    </div>
  );
  }
}

export default App;
