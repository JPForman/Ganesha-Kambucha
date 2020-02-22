import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import KombuchaList from './KombuchaList';

function Kombucha(props){

  const propRow={
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    textAlign: 'center',
    border: '2px solid black',
    margin: '5px',
    borderRadius: '5px',
  }

  const editLink={
    fontSize: '15px'
  }

  const prop={
    top: '30%',
    position: 'relative',
  }

  const sellButton={
    marginTop: '15px',
  }

  return (
      <div style={propRow}>
        <div>
          <h2><em>{props.name}</em></h2>
          <Link to='/UpdateKombucha' style={editLink}>edit the brew</Link>
        </div>
        <p style={prop}>{props.flavor}</p>
        <p style={prop}><em>{props.price}</em></p>
        <button style={sellButton} onClick={props.onSellPint}>Sell Pint</button>
        <p style={prop}>{props.pintsLeft}</p>
        <hr/>
      </div>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  pintsLeft: PropTypes.string
};

export default Kombucha;
