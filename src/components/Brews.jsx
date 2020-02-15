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
    zIndex: '-2',
    position: 'relative',
  }

  const sectionTitle={
    top: '15%',
    float: 'right',
    fontSize: '100px',
    fontFamily: 'fantasy',
    position: 'relative',
    zIndex: '-1',
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
