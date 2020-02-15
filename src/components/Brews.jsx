import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import KombuchaList from './KombuchaList';
import GaneshaBillboard from './images/GaneshaBillboard.jpg'


function Brews(props){

  const billboard={
    backgroundColor: '#c75d48',
    marginTop: '87px',
    height: 'auto',
    zIndex: '-2',
    position: 'relative',
  }

  const sectionTitle={
    top: '14%',
    float: 'right',
    fontSize: '100px',
    fontFamily: 'fantasy',
    position: 'relative',
    zIndex: '-1',
    marginRight: '35px',
  }

  const ganeshaBillboard={
    margin: '5px',
    zIndex: '-1',
    height: '200px',
    width: 'auto',
    backgroundColor: '#c75d48',
    border: '5px solid black',
    position: 'relative',
  }

  const list={
    width: '100%',
    position: 'absolute',
  }

  const newBrew={
    position: 'absolute',
    color: 'lightGrey',
    backgroundColor: 'darkGreen',
    border: '2px solid green',
    borderRadius: '3px',
    padding: '3px',
    margin: '2px',
    top: '20%',
  }

  return(
    <div>
      <div>
        <h2 style={sectionTitle}>BREWS</h2>
          <div style={billboard}>
            <img style={ganeshaBillboard} src={GaneshaBillboard}></img>
          </div>
      </div>
      <div style={list}>
      <Link to='./NewKombucha' style={newBrew}>Add a Brew</Link>
        <KombuchaList />
      </div>
    </div>
  );
}

export default Brews;
