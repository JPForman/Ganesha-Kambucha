import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import KombuchaList from './KombuchaList';
import GaneshaBillboard from './images/GaneshaBillboard.jpg'
import Wood from './images/Wood.jpg'


function Brew(props){

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

  const wood={
    width: '100%',
    height: '100%',
    opacity: '20%',
    float: 'left',
    position: 'absolute',
  }

  return (
    <div>
      <div>
        <h2 style={sectionTitle}>BREWS</h2>
        <div style={billboard}>
          <img style={wood} src={Wood}></img>
          <img style={ganeshaBillboard} src={GaneshaBillboard}></img>
        </div>
      </div>
      <div style={list}>
        <KombuchaList />
      </div>
    </div>
  );
}

Brew.propTypes = {
  kombuchaList: PropTypes.array
};

export default Brew;
