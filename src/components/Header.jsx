import React from 'react';
import {Link} from 'react-router-dom';
import LeftNav from './LeftNav'
import Logo from './Logo'
import RightNav from './RightNav'

function Header(){
  return(
    <div>
      <LeftNav />
      <Logo />
      <RightNav />
    </div>
  );
}

export default Header;
