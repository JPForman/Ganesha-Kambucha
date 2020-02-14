import React from 'react';
import {Link} from 'react-router-dom';


function RightNav(){
  return(
    <div className="nav">
      <table className="nav-links">
        <tr>
          <Link to='/home' className="navLink">LogIn</Link>
          <Link to='/aboutUs' className="navLink">SignUp</Link>
        </tr>
      </table>
    </div>
  );
}
export default RightNav;
