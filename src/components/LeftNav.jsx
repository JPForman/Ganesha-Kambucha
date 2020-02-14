import React from 'react';
import {Link} from 'react-router-dom';


function LeftNav(){

const nav= {
  
}

  return(
    <div style={nav}>
      <table className="nav-links">
        <tr>
          <Link to='/home' className="navLink">Home</Link>
          <Link to='/aboutUs' className="navLink">About us</Link>
          <Link to='/' className="navLink">Upcoming Events</Link>
        </tr>
      </table>
    </div>
  );
}
export default LeftNav;
