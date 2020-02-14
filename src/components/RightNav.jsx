import React from 'react';
import {Link} from 'react-router-dom';


function RightNav(){

  const navLink= {
    float: 'right',
    margin: '5px'
  }

  return(
    <div className="nav">
      <div style={navLink}>
        <Link to='/home' className="navLink">LogIn</Link>
      </div>
      <div style={navLink}>
        <Link to='/aboutUs' className="navLink">SignUp</Link>
      </div>
    </div>
  );
}

export default RightNav;
