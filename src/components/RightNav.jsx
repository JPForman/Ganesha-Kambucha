import React from 'react';
import {Link} from 'react-router-dom';


function RightNav(){


  return(
    <div className="nav">
          <Link to='/home' className="navLink">LogIn</Link>
          <Link to='/aboutUs' className="navLink">SignUp</Link>
    </div>
  );
}
export default RightNav;
