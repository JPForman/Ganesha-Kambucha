import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './KombuchaList.css';


class KombuchaList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      kombuchaList: props.kombuchaList
    }
  }

  handleSellPint(kombucha) {
    let newPintsLeft = this.state.pintsLeft
    newPintsLeft -= 1;
    this.setState({pintsLeft: newPintsLeft})
  }

  render(props){
    return (
      <div className='brewGrid'>
        <div className='brewHeaders'>
          <h1>Brew Name</h1>
          <h1>Flavor</h1>
          <h1>Price</h1>
          <h1>Sell a Pint</h1>
          <h1># Pints Left</h1>
        </div>

        <div className='newBrew'>
          <Link to='./NewKombucha' className='newText'>Add a Brew</Link>
        </div>

          {this.state.kombuchaList.map((kombucha) =>
            <Kombucha
              name={kombucha.name}
              flavor={kombucha.flavor}
              price={kombucha.price}
              pintsLeft={kombucha.pintsLeft}
            />
          )}
      </div>
    );
  }
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onSellPint: PropTypes.array
};

export default KombuchaList;
