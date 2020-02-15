import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import KombuchaList from './KombuchaList';
import GaneshaBillboard from './images/GaneshaBillboard.jpg'


function Brews(props){

  const billboard={
    backgroundColor: '#c75d48',
    marginTop: '90px',
    height: 'auto',

  }

  const sectionTitle={
    top: '50%',
    left: '78%',
    position: 'absolute',
    fontSize: '60px',
  }

  const ganeshaBillboard={
    zIndex: '-1',
    height: '400px',
    width: 'auto',
    backgroundColor: '#c75d48',
    border: '5px solid black',
  }

  const kombuchaRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto'
  }

  return(
    <div>
      <div>
        <h2 style={sectionTitle}>BREWS</h2>
          <div style={billboard}>
            <img style={ganeshaBillboard} src={GaneshaBillboard}></img>
          </div>
          <Link to='./NewKombucha'>Add a Brew</Link>
      </div>

      <KombuchaList />

    </div>
  );
}

export default Brews;
