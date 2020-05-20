import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './NewKombucha.css';

function NewKombucha(props){
  let _name = null;
  let _flavor = null;
  let _price = null;
  let _pintsLeft = 124;

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({name: _name.value, pintsLeft: _pintsLeft, flavor: _flavor.value, price: _price.value});
    _name.value = '';
    _flavor.value = '';
    _price.value = '';
    props.history.push('/')
  }

  return(
    <div className='updateBody'>
      <h1 className="newTitle">Tap A Keg!</h1>

        <div className='updateTitleRow'>
          <p className='updateTitle'>Name</p>
          <p className='updateTitle'>Flavor</p>
          <p className='updateTitle'>Price</p>
        </div>
        <form onSubmit={handleNewKombuchaFormSubmission}>
        <div className='updateRow'>
          <input
            className='update'
            type='text'
            id='name'
            placeholder='Name of Kombucha'
            required
            ref={(input) => {_name = input;}}/>
          <input
            className='update'
            type='text'
            id='flavor'
            placeholder='Flavor'
            required
            ref={(input) => {_flavor = input;}}/>
          <input
            className='update'
            type='text'
            id='price'
            placeholder='Price'
            required
          ref={(input) => {_price = input;}}/>
          </div>
          <button type='submit' className='buchButton'>Add the Buch!</button>

        </form>
      </div>
    );
  }

  NewKombucha.propTypes = {
    onNewKombuchaCreation: PropTypes.func
  };

  export default withRouter(NewKombucha);
