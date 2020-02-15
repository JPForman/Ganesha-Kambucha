import React from "react";
import Kombucha from "./Kombucha";

const masterKombuchaList = [
  {
    name: "Shiv's Third Eye",
    flavor: "Rasberry Honey Lime",
    price: "$3",
    pintsLeft: "42"
  },
  {
    name: "Vishnu's Couch",
    flavor: "Honey Lemon Ginger",
    price: "$3",
    pintsLeft: "108"
  }

];

function KombuchaList(){
  const brewHeaders={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    textAlign: 'center'
  }

  return (
    <div>
      <hr/>
      <div style={brewHeaders}>
        <h2>Brew Name</h2>
        <p>Flavor</p>
        <p>Price</p>
        <p>Sell a Pint</p>
        <p># of Pints Left</p>
      </div>

      {masterKombuchaList.map((kombucha,index) =>
        <Kombucha
        name={kombucha.name}
        flavor={kombucha.flavor}
        price={kombucha.price}
        pintsLeft={kombucha.pintsLeft}/>
      )}
    </div>
  );
}

export default KombuchaList;
