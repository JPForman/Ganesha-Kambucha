import React from 'react';
import {Link} from 'react-router-dom';
import LeftNav from './LeftNav'

function Header(){
  return(
    <div>
      <LeftNav />
      <Logo />

    </div>
  );
}

export default Header;
