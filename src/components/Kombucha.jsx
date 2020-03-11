import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import KombuchaList from './KombuchaList';
import './Kombucha.css';

const propRow={
  display: 'grid',
  gridTemplateColumns: '20% 20% 20% 20% 20%',
  textAlign: 'center',
  border: '2px solid black',
  margin: '5px',
  borderRadius: '5px',

}

const editLink={
  fontSize: '15px'
}

const prop={
  top: '30%',
  position: 'relative',
}

const sellButton={
  marginTop: '15px',
}

class Kombucha extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        pintsLeft: props.pintsLeft
      }
      this.handleSellPint = this.handleSellPint.bind(this)
    };

    handleSellPint(kombucha) {
      let newPintsLeft = this.state.pintsLeft
      newPintsLeft -= 1;
      this.setState({pintsLeft: newPintsLeft})
    }


  render(props){
  return (
      <div style={propRow} className='brewFull'>
        <div className='brewNameDiv'>
          <p className='brewCard'>{this.props.name}</p>
        </div>

        <div className='brewFlavorDiv'>
          <p className='brewCard' style={prop}>{this.props.flavor}</p>
        </div>
        <div className='brewPriceDiv'>
          <p className='brewCard' style={prop}><em>{this.props.price}</em></p>
        </div>

        <div className='brewButtonDiv'>
          <button className='brewButton' style={sellButton} onClick={this.handleSellPint}>Sell Pint</button>
        </div>

        <div className='brewPintsDiv'>
          <p className='brewCard' style={prop}>{this.state.pintsLeft}</p>
        </div>
        <hr/>
      </div>
  );
}
}
Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  pintsLeft: PropTypes.string
};

export default Kombucha;
