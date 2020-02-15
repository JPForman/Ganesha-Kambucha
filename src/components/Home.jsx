import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import KombuchaList from './KombuchaList';


function Home(props){
  return(
    <div>
      <div>
        <h2>BREWS</h2>
        <Link to='./NewKombucha'>Add a Brew</Link>
      </div>


      <table width="100%">
        <tr>
          <th>Name</th>
          <th>Flavor</th>
          <th>Price</th>
          <th>Amount Left In Keg</th>
          <th>Sell a Pint</th>
          <th>Less Than a Pint Left!</th>
        </tr>
      </table>
      <div>
        <p>{props.name}</p>
        <p>{props.flavor}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string
};

export default Home;
