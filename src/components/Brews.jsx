import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import KombuchaList from './KombuchaList';
import GaneshaBillboard from './images/GaneshaBillboard.jpg'


function Brews(props){
  const ganeshaBillboard={
    height: '400px',
    width: 'auto',
    backgroundColor: '#c75d48',
  }

  const kombuchaRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto'
  }

  return(
    <div>
      <div>
        <h2>BREWS</h2>
        <div >
          <img style={ganeshaBillboard} src={GaneshaBillboard}></img>
        </div>
        <Link to='./NewKombucha'>Add a Brew</Link>
      </div>

      <KombuchaList />

    </div>
  );
}

export default Brews;
