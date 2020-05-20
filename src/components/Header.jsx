import React from 'react';
import {Link} from 'react-router-dom';
import LeftNav from './LeftNav';
import Logo from './Logo';
import RightNav from './RightNav';
import './Header.css';

function Header(){
  return(
    <div>
    <div className='header'>
      <div className='leftNav'>
        <LeftNav />
      </div>

      <Link to='/' className='logoLink'>
        <div className='centerLogo'>
          <Logo />
        </div>
      </Link>

      <div className='rightNav'>
        <RightNav />
      </div>
    </div>
    </div>
  );
}

export default Header;
