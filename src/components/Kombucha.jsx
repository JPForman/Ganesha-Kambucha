import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){

  const propRow={
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    textAlign: 'center',
    border: '2px solid black',
    margin: '5px',
    borderRadius: '5px',
  }

  return (
      <div style={propRow}>
        <h2><em>{props.name}</em></h2>
        <p>{props.flavor}</p>
        <p><em>{props.price}</em></p>
        <button>Sell Pint</button>
        <p>{props.pintsLeft}</p>
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
