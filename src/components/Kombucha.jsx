import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return (
      <div>
        <h3>{props.name}</h3>
        <h3>{props.flavor}</h3>
        <p><em>{props.price}</em></p>
        <hr/>
      </div>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string
};

export default Kombucha;
