import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import KombuchaList from './KombuchaList';


function Brews(props){

  const kombuchaRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto'
  }

  return(
    <div>
      <div>
        <h2>BREWS</h2>
        <Link to='./NewKombucha'>Add a Brew</Link>
      </div>

      <KombuchaList />

    </div>
  );
}

export default Brews;
