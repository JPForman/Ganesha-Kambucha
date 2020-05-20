import React from 'react';
import GaneshaIcon from './images/GaneshaIcon.png';
import './Logo.css';

function Logo(){
  const icon={
    height: '20vh',
    // marginTop: '20px',
    position: 'absolute',
    verticalAlign: 'middle',
    zIndex: '-1',
  }

  const title={
    // marginTop: "-100px"
  }

  return(
    <div>
    <img style={icon} src={GaneshaIcon}></img>
    <h1 style={title} className="logo">Ganesha's Kombucha House</h1>
    </div>
  );

}

export default Logo;
