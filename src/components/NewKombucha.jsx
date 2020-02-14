import React from 'react';
import {Link} from 'react-router-dom';

function NewKombucha(){
  return(
    <div>
      <h1 className="logo">New Kombucha Page</h1>

      <form>
        <input
          type='text'
          id='Name'
          placeholder='Name of Kombucha'
      </form>
    </div>

  );

}

export default NewKombucha;
