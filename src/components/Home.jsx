import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
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
        <tr>

        </tr>
      </table>
    </div>
  );
}

export default Home;
