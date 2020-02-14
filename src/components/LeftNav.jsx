import React from 'react';
import {Link} from 'react-router-dom';


function LeftNav(){

  const navLink= {
    float: 'left',
    margin: '5px'
  }

  return(
    <div>
      <table className="nav-links">
        <tr>
          <div style={navLink}>
            <Link to='/home'>Home</Link>
          </div>

          <div style={navLink}>
            <Link to='/aboutUs' className="navLink">About us</Link>
          </div>

          <div style={navLink}>
            <Link to='/' className="navLink">Upcoming Events</Link>
          </div>

        </tr>
      </table>
    </div>
  );
}
export default LeftNav;
