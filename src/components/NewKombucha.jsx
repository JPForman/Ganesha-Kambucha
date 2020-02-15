import React from 'react';
import {Link} from 'react-router-dom';


function NewKombucha(){

  const updateTitle= {
  }

  const updateTitleRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }

  const update={
  }

  const updateBody={
    marginTop: '100px',
  }

  const updateRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  }

  return(
    <div style={updateBody}>
      <h1 className="logo">New Kombucha Page</h1>

        <div style={updateTitleRow}>
          <p style={updateTitle}>Name</p>
          <p style={updateTitle}>Flavor</p>
          <p style={updateTitle}>Price</p>
        </div>
        <form>
        <div style={updateRow}>
          <input
            style={update}
            type='text'
            id='Name'
            placeholder='Name of Kombucha'/>
          <input
            style={update}
            type='text'
            id='Flavor'
            placeholder='Flavor'/>
          <input
            style={update}
            type='text'
            id='Price'
            placeholder='Price'/>
          </div>

        </form>
      </div>

    );

  }

  export default NewKombucha;
